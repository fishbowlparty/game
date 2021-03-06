import {
  drawNextCard,
  nextPlayerNextTeam,
  nextPlayerSameTeam,
  nextTurn,
} from "./mutations";
import { selectActivePlayer, selectNumberOfPlayers } from "./selectors";
import {
  Actions,
  ADVANCE_FROM_DRAFTING,
  ADVANCE_FROM_REGISTRATION,
  ADVANCE_FROM_WRITING,
  END_TURN,
  Game,
  GOT_CARD,
  JOIN_GAME,
  LEAVE_GAME,
  PAUSE_TURN,
  RESTART_GAME,
  RESUME_TURN,
  SET_GAME_SETTINGS,
  SET_TEAMS,
  SKIP_CARD,
  SKIP_TURN,
  START_TURN,
  SUBMIT_CARDS,
} from "./types";

/*
Flow:

Rules
- You set up state when you needed it

Gameplay events
- Skip turn
  - Only allowed if isFresh
  - Update active player
  - Reset turn state
- Start Turn
  - 
- Pause Turn
- End Turn
- Got card
- Skip Card
*/

const initialGame: Game = {
  isFresh: true,
  gameCode: "",
  phase: "registration",
  playerCards: {},
  activePlayer: {
    team: "orange",
    index: {
      orange: 0,
      blue: 0,
    },
  },
  hostId: "",
  players: {},
  round: {
    guessedCardIds: {},
    number: 0,
  },
  score: {
    orange: 0,
    blue: 0,
  },
  settings: {
    cardsPerPlayer: 3,
    numberOfRounds: 3,
    skipPenalty: -1,
    turnDuration: 45,
  },
  teams: {
    orange: [],
    blue: [],
  },
  turns: {
    active: {
      activeCardId: "",
      isFresh: true,
      paused: true,
      timeRemaining: 45,
      skippedCardIds: {},
    },
    recap: {
      team: "orange",
      cardEvents: [],
    },
  },
};

function leaveGame(game: Game, action: LEAVE_GAME): Game {
  if (game.phase !== "registration") {
    return game;
  }
  const { playerId } = action.payload;

  const { [playerId]: _, ...players } = game.players;
  return {
    ...game,
    players,
  };
}

function joinGame(game: Game, action: JOIN_GAME): Game {
  if (game.phase !== "registration") {
    return game;
  }

  const { playerId, name } = action.payload;
  const joinOrder =
    game.players[playerId]?.joinOrder ??
    Math.max(...Object.values(game.players).map((player) => player.joinOrder)) +
      1;

  return {
    ...game,
    players: {
      ...game.players,
      [playerId]: {
        id: playerId,
        name,
        joinOrder,
      },
    },
  };
}

function advanceFromRegistration(
  game: Game,
  action: ADVANCE_FROM_REGISTRATION
): Game {
  const { teams, firstTeam } = action.payload;

  if (game.phase !== "registration") {
    return game;
  }
  // requires at least 4 players
  if (selectNumberOfPlayers(game) < 4) {
    return game;
  }
  return {
    ...game,
    teams,
    activePlayer: {
      team: firstTeam,
      index: { orange: 0, blue: 0 },
    },
    phase: "writing",
  };
}
function advanceFromWriting(game: Game, action: ADVANCE_FROM_WRITING): Game {
  if (game.phase !== "writing") {
    return game;
  }
  // requires at least 1 player's cards to be submitted
  if (Object.keys(game.playerCards).length < 1) {
    return game;
  }

  return {
    ...game,
    phase: "drafting",
  };
}

function advanceFromDrafting(game: Game, action: ADVANCE_FROM_DRAFTING): Game {
  if (game.phase !== "drafting") {
    return game;
  }
  // all players must be assigned to a team
  const { orange, blue } = game.teams;
  if (orange.length < 2 || blue.length < 2) {
    return game;
  }
  if (orange.length + blue.length !== selectNumberOfPlayers(game)) {
    return game;
  }

  // initialize turn order state
  return {
    ...game,
    phase: "active",
    round: {
      number: 1,
      guessedCardIds: {},
    },
    turns: {
      active: {
        activeCardId: "",
        isFresh: true,
        paused: true,
        timeRemaining: game.settings.turnDuration,
        skippedCardIds: {},
      },
      recap: {
        team: "orange",
        cardEvents: [],
      },
    },
  };
}

export function restartGame(game: Game, action: RESTART_GAME): Game {
  if (game.phase != "ended") {
    return game;
  }

  return {
    ...game,
    phase: "registration",
    isFresh: true,
    playerCards: {},
    teams: { orange: [], blue: [] },
    score: { orange: 0, blue: 0 },
    activePlayer: {
      team: "orange",
      index: { orange: 0, blue: 0 },
    },
    round: {
      number: 1,
      guessedCardIds: {},
    },
    turns: {
      active: {
        isFresh: true,
        paused: true,
        timeRemaining: game.settings.turnDuration,
        activeCardId: "",
        skippedCardIds: {},
      },
      recap: {
        team: "orange",
        cardEvents: [],
      },
    },
  };
}

export function submitCards(game: Game, action: SUBMIT_CARDS): Game {
  if (game.phase !== "writing") {
    return game;
  }

  const { playerId, cards } = action.payload;

  return {
    ...game,
    playerCards: {
      ...game.playerCards,
      [playerId]: cards,
    },
  };
}

export function setTeams(game: Game, action: SET_TEAMS): Game {
  if (game.phase !== "drafting") {
    return game;
  }

  const { teams } = action.payload;

  return {
    ...game,
    teams,
  };
}

/** GAMEPLAY ACTIONS */
export function skipTurn(game: Game, action: SKIP_TURN): Game {
  if (game.phase !== "active") {
    return game;
  }
  if (selectActivePlayer(game).id !== action.payload.playerId) {
    return game;
  }

  const { active } = game.turns;

  if (!active.isFresh) {
    return game;
  }

  return nextPlayerSameTeam(game);
}

export function startTurn(game: Game, action: START_TURN): Game {
  if (game.phase !== "active") {
    return game;
  }
  if (selectActivePlayer(game).id !== action.payload.playerId) {
    return game;
  }

  const { drawSeed, playerId } = action.payload;

  if (game.turns.active.isFresh) {
    game = drawNextCard(game, drawSeed, game.turns.active.timeRemaining);
  }

  return {
    ...game,
    isFresh: false,
    round: {
      ...game.round,
    },
    turns: {
      ...game.turns,
      active: {
        ...game.turns.active,
        isFresh: false,
        paused: false,
      },
      recap: {
        team: game.activePlayer.team,
        cardEvents: [],
      },
    },
  };
}

export function pauseTurn(game: Game, action: PAUSE_TURN): Game {
  if (game.phase !== "active") {
    return game;
  }
  if (selectActivePlayer(game).id !== action.payload.playerId) {
    return game;
  }

  const { timeRemaining } = action.payload;

  return {
    ...game,
    round: {
      ...game.round,
    },
    turns: {
      ...game.turns,
      active: {
        ...game.turns.active,
        paused: true,
        timeRemaining,
      },
    },
  };
}

export function resumeTurn(game: Game, action: RESUME_TURN): Game {
  if (game.phase !== "active") {
    return game;
  }
  if (selectActivePlayer(game).id !== action.payload.playerId) {
    return game;
  }

  return {
    ...game,
    round: {
      ...game.round,
    },
    turns: {
      ...game.turns,
      active: {
        ...game.turns.active,
        paused: false,
      },
    },
  };
}

function gotCard(game: Game, action: GOT_CARD): Game {
  if (game.phase !== "active") {
    return game;
  }
  if (game.turns.active.paused) {
    return game;
  }

  const { cardId, timeRemaining, drawSeed } = action.payload;
  // if the card we got was not the active card, ignore
  if (cardId !== game.turns.active.activeCardId) {
    return game;
  }
  // if the card has already been counted as guessed, ignore
  if (game.round.guessedCardIds[cardId]) {
    return game;
  }

  // add to guessed cards map, update score,
  const { team } = game.activePlayer;
  game = {
    ...game,
    // update the score
    score: {
      ...game.score,
      [team]: game.score[team] + 1,
    },
    // add the card id to the round and active turn (becomes recap)
    round: {
      ...game.round,
      guessedCardIds: {
        ...game.round.guessedCardIds,
        [cardId]: true,
      },
    },
    turns: {
      ...game.turns,
      recap: {
        ...game.turns.recap,
        cardEvents: game.turns.recap.cardEvents.concat(cardId),
      },
    },
  };

  game = drawNextCard(game, drawSeed, timeRemaining);
  return game;
}

function skipCard(game: Game, action: SKIP_CARD): Game {
  if (game.phase !== "active") {
    return game;
  }
  if (game.turns.active.paused) {
    return game;
  }

  const { cardId, drawSeed } = action.payload;
  const { skippedCardIds } = game.turns.active;

  // if this card has not been skipped before
  if (!skippedCardIds[cardId]) {
    const { team } = game.activePlayer;
    game = {
      ...game,
      score: {
        ...game.score,
        [team]: game.score[team] + game.settings.skipPenalty,
      },
      turns: {
        active: {
          ...game.turns.active,
          skippedCardIds: {
            ...game.turns.active.skippedCardIds,
            [cardId]: true,
          },
        },
        recap: {
          ...game.turns.recap,
          cardEvents: game.turns.recap.cardEvents.concat(null),
        },
      },
    };
  }

  return drawNextCard(game, drawSeed, 0);
}

function endTurn(game: Game, action: END_TURN): Game {
  if (game.phase !== "active") {
    return game;
  }
  if (selectActivePlayer(game).id !== action.payload.playerId) {
    return game;
  }

  game = nextTurn(game);
  return nextPlayerNextTeam(game);
}

function setSettings(game: Game, action: SET_GAME_SETTINGS): Game {
  return {
    ...game,
    settings: action.payload.settings,
  };
}

export function GameReducer(game: Game = initialGame, action: Actions): Game {
  switch (action.type) {
    // phase
    case "ADVANCE_FROM_REGISTRATION":
      return advanceFromRegistration(game, action);
    case "ADVANCE_FROM_WRITING":
      return advanceFromWriting(game, action);
    case "ADVANCE_FROM_DRAFTING":
      return advanceFromDrafting(game, action);
    case "RESTART_GAME":
      return restartGame(game, action);

    // admin
    case "SET_GAME_SETTINGS":
      return setSettings(game, action);
    case "JOIN_GAME":
      return joinGame(game, action);
    case "LEAVE_GAME":
      return leaveGame(game, action);
    case "SUBMIT_CARDS":
      return submitCards(game, action);
    case "SET_TEAMS":
      return setTeams(game, action);

    // gameplay actions
    case "SKIP_TURN":
      return skipTurn(game, action);
    case "START_TURN":
      return startTurn(game, action);
    case "END_TURN":
      return endTurn(game, action);
    case "PAUSE_TURN":
      return pauseTurn(game, action);
    case "RESUME_TURN":
      return resumeTurn(game, action);
    case "GOT_CARD":
      return gotCard(game, action);
    case "SKIP_CARD":
      return skipCard(game, action);
    case "SERVER_UPDATE_STATE":
      // TODO: merge state for cheaper updates
      return action.payload;

    // default
    default:
      return game;
  }
}
