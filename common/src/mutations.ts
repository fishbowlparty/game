import { Game } from "./types";
import { selectCards } from "./selectors";

// Updates activePlayer pointer to the next player on the next team
export function nextPlayerNextTeam(game: Game): Game {
  const { team } = game.activePlayer;
  const nextTeam = team === "blue" ? "orange" : "blue";

  return nextPlayerSameTeam({
    ...game,
    activePlayer: {
      ...game.activePlayer,
      team: nextTeam,
    },
  });
}

// Updates activePlayer pointer to the next player on the same team
export function nextPlayerSameTeam(game: Game): Game {
  const { team, index } = game.activePlayer;
  const nextIndex =
    index[team] >= game.teams[team].length - 1 ? 0 : index[team] + 1;

  return {
    ...game,
    activePlayer: {
      team,
      index: {
        ...index,
        [team]: nextIndex,
      },
    },
  };
}

// when entering active state
// when skipping a turn (next player same team, reset time)
// when end a turn (next player next team, reset time)
// when "GOT IT" down to zero (same player, time provided)
export function nextTurn(game: Game, timeRemaining?: number): Game {
  return {
    ...game,
    turns: {
      ...game.turns,
      active: {
        isFresh: true,
        paused: true,
        timeRemaining: timeRemaining ?? game.settings.turnDuration,
        activeCardId: "",
        skippedCardIds: {},
      },
    },
  };
}

export function nextRound(game: Game, timeRemaining: number): Game {
  const nextRoundNumber = game.round.number + 1;
  const nextPhase =
    nextRoundNumber > game.settings.numberOfRounds ? "ended" : game.phase;

  return {
    ...nextTurn(game, timeRemaining),
    round: {
      number: nextRoundNumber,
      guessedCardIds: {},
    },
    phase: nextPhase,
  };
}

export function drawNextCard(
  game: Game,
  drawSeed: number,
  timeRemaining: number
): Game {
  const { guessedCardIds } = game.round;
  const { skippedCardIds } = game.turns.active;

  // the draw deck is  cards that have  not yet been  guessed or skips
  const drawCardIds = Object.keys(selectCards(game)).filter(
    (cardId) => !(guessedCardIds[cardId] || skippedCardIds[cardId])
  );
  const unguessedSkipCardIds = Object.keys(skippedCardIds).filter(
    (cardId) => !guessedCardIds[cardId]
  );
  let activeCardId = null;
  if (drawCardIds.length > 0) {
    // if there are draw cards left, pull randomly from the draw deck
    activeCardId = drawCardIds[Math.floor(drawSeed * drawCardIds.length)];
  } else if (unguessedSkipCardIds.length > 0) {
    // otherwise, if there are skip cards left, rotate through the unguessed skip deck
    let nextIndex =
      unguessedSkipCardIds.indexOf(game.turns.active.activeCardId) + 1;
    if (nextIndex > unguessedSkipCardIds.length - 1) {
      nextIndex = 0;
    }
    activeCardId = unguessedSkipCardIds[nextIndex];
  } else {
    // otherwise we are down to 0 - go to next round
    return nextRound(game, timeRemaining);
  }

  return {
    ...game,
    turns: {
      ...game.turns,
      active: {
        ...game.turns.active,
        activeCardId,
      },
    },
  };
}
