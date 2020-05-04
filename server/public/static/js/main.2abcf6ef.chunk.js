(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{119:function(e,t,a){e.exports=a(163)},160:function(e,t){},163:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),i=a(204),o=a(22),u=a(18),s=a(103),d=Object(s.a)({palette:{primary:{main:"#2196f3",contrastText:"#fff"},secondary:{main:"#fc7100",contrastText:"#fff"}},typography:{}}),m=a(29),p=a(17),f=a.n(p),g=a(31),E=a(104),y=a(207),b=a(188),v=a(4),h=a(25),x=a(208),O=function(){return{id:localStorage.getItem("PLAYER_ID")||"",name:localStorage.getItem("PLAYER_NAME")||""}};function C(){var e=Object(m.a)(["\n  color: ",";\n"]);return C=function(){return e},e}var j=function(){var e=O().id,t=Object(u.g)(),a=Object(n.useCallback)(Object(g.a)(f.a.mark((function a(){var n,r,l;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({hostId:e})});case 2:return n=a.sent,a.next=5,n.json();case 5:r=a.sent,l=r.gameCode,t.push("/games/".concat(l));case 8:case"end":return a.stop()}}),a)}))),[t]);return r.a.createElement(v.Flex,{flexDirection:"column",flex:"1 0 auto",padding:d.spacing(2)},r.a.createElement(v.Flex,{flex:"1 1 0%"}),r.a.createElement(v.Flex,{alignItems:"center",justifyContent:"center"},r.a.createElement(E.a,{variant:"h2",color:"secondary",style:{fontWeight:"bold"}},"fish",r.a.createElement(I,null,"bowl"))),r.a.createElement(v.Flex,{flex:"2 2 0%"}),r.a.createElement(v.Flex,{flexDirection:"column"},r.a.createElement(y.a,{mb:2},r.a.createElement(b.a,{fullWidth:!0,variant:"outlined",component:o.b,to:"/join"},"Join Game")),r.a.createElement(b.a,{fullWidth:!0,variant:"outlined",color:"primary",onClick:a},"Create New Game")),r.a.createElement(v.Flex,{flex:"1 1 0%"}))},I=h.default.span(C(),d.palette.primary.main),P=a(62),R=a(205),S=a(39),F=function(){var e=Object(S.a)({mode:"onChange"}),t=e.register,a=e.handleSubmit,l=e.formState,c=Object(u.g)(),i=Object(n.useCallback)((function(e){console.log(e),c.push("/games/".concat(e.gameCode))}),[c]),o=l.isValid;return console.log(o),r.a.createElement(v.Flex,{flexDirection:"column",flex:"1 0 auto",padding:d.spacing(2)},r.a.createElement(v.Flex,{flex:"1 1 0%"}),r.a.createElement(v.Flex,{flexDirection:"column"},r.a.createElement(E.a,{variant:"h2",align:"center"},"join a game"),r.a.createElement(E.a,{variant:"body1",align:"center"},"Got a game code? Enter it here!"),r.a.createElement(y.a,{m:4}),r.a.createElement("form",{onSubmit:a(i)},r.a.createElement(E.a,{variant:"h5"},r.a.createElement(R.a,{fullWidth:!0,name:"gameCode",margin:"normal",variant:"outlined",placeholder:"ABCD",inputRef:t({required:!0,maxLength:4,minLength:4}),InputProps:{inputProps:{style:Object(P.a)({},d.typography.h3,{textAlign:"center",fontWeight:"bold",textTransform:"uppercase"}),maxLength:4}}})),r.a.createElement(b.a,{variant:"outlined",color:"primary",fullWidth:!0,type:"submit",disabled:!o},"Join Game"))),r.a.createElement(v.Flex,{flex:"2 2 0%"}))},k=a(15),T=a(30),w=a(102),D=a.n(w),A=a(26),_=a(24),N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||A.c,W=function(){return Object(T.c)()},G=function(e){return Object(T.d)(e)},M=function(){O().id;var e=W(),t=G((function(e){return e.round.number})),a=G((function(e){return Object.values(e.playerCards).flat().length})),l=G((function(e){return Object.keys(e.round.guessedCardIds).length})),c=G((function(e){return Object.keys(e.turns.active.skippedCardIds).filter((function(t){return!e.round.guessedCardIds[t]})).length})),i=a-l-c,o=G((function(e){return e.score})),u=G((function(e){var t=e.teams[e.activePlayer.team].filter((function(t){return t!==Object(_.selectActivePlayer)(e).id})).map((function(t){return e.players[t].name}));return t.reduce((function(e,a,n){var r="";return r=n===t.length-1?1===t.length?" is":" are":n===t.length-2?t.length>2?", and ":" and ":", ","".concat(e).concat(a).concat(r)}),"")})),s=G((function(e){return e.turns.active.paused})),m=G((function(e){return e.turns.active.isFresh})),p=G((function(e){return e.turns.recap})),f=G((function(e){return e.settings})),g=G(_.selectCards),h=G((function(e){return Object(_.selectCards)(e)[e.turns.active.activeCardId]})),x=Object(n.useCallback)((function(){null!=h&&e({type:"SKIP_CARD",payload:{cardId:h.id,drawSeed:Math.random()}})}),[e,h]),C=U(),j=Object(k.a)(C,2),I=j[0],P=j[1],R=Object(n.useCallback)((function(){null!=h&&e({type:"GOT_CARD",payload:{cardId:h.id,timeRemaining:I,drawSeed:Math.random()}})}),[e,h,I]),S=Object(n.useCallback)((function(){e({type:"SKIP_TURN",payload:{}})}),[e]),F=Object(n.useCallback)((function(){e({type:"START_TURN",payload:{drawSeed:Math.random()}})}),[e]);return r.a.createElement(v.Flex,{flexDirection:"column",flex:"1 0 auto",padding:d.spacing(2)},r.a.createElement(v.Flex,{flex:"1 0 auto",flexDirection:"column"},r.a.createElement(y.a,{m:1},r.a.createElement(E.a,{variant:"h4",align:"center"},"Round ",t)),r.a.createElement(v.Flex,{margin:"".concat(d.spacing(1),"px")},r.a.createElement(v.Flex,{flex:"1 1 0%",alignItems:"center",flexDirection:"column"},r.a.createElement(E.a,{style:{fontWeight:300,lineHeight:"36px"},color:"textSecondary",variant:"body1"},"Cards Left"),r.a.createElement(v.Flex,{width:"100%"},r.a.createElement(v.Flex,{flex:"1 0 auto",justifyContent:"flex-end",marginRight:"".concat(d.spacing(1),"px")},r.a.createElement(E.a,{variant:"h6"},i)),r.a.createElement(E.a,{variant:"h6"},"/"),r.a.createElement(v.Flex,{flex:"1 0 auto",marginLeft:"".concat(d.spacing(1),"px")},r.a.createElement(E.a,{variant:"h6"},a))),r.a.createElement(E.a,{variant:"caption",color:"textSecondary"},"\xa0",c>0&&"".concat(c," skipped"),"\xa0")),r.a.createElement(v.Flex,{flex:"1 1 0%",alignItems:"center",flexDirection:"column"},r.a.createElement(E.a,{style:{fontWeight:300,lineHeight:"36px"},color:"textSecondary",variant:"body1"},"Score"),r.a.createElement(v.Flex,{width:"100%"},r.a.createElement(v.Flex,{flex:"1 0 auto",justifyContent:"flex-end",marginRight:"".concat(d.spacing(1),"px")},r.a.createElement(E.a,{variant:"h6",color:"secondary"},o.orange)),r.a.createElement(v.Flex,{flex:"1 0 auto",marginLeft:"".concat(d.spacing(1),"px")},r.a.createElement(E.a,{variant:"h6",color:"primary"},o.blue))))),r.a.createElement(y.a,{m:1},r.a.createElement(E.a,{align:"center"},u," guessing for you.")),r.a.createElement(y.a,{mb:1},r.a.createElement(b.a,{variant:"outlined",fullWidth:!0,onClick:P},r.a.createElement(v.Flex,{flexDirection:"column",alignItems:"center"},r.a.createElement(E.a,{variant:"caption",align:"center",color:"textSecondary"},"Time Remaining"),r.a.createElement(E.a,{variant:"h2",style:{fontWeight:"bold"},color:"textSecondary"},I)))),r.a.createElement(y.a,{mb:2,mt:2,padding:4},m?null==p?null:r.a.createElement(v.Flex,{flexDirection:"column"},r.a.createElement(E.a,{variant:"h6",align:"center"},p.team," team got"," ",p.guessedCardIds.length+p.skippedCardCount*f.skipPenalty," ","points."),p.guessedCardIds.map((function(e){return r.a.createElement(E.a,null,g[e].text)}))):s?r.a.createElement(E.a,{variant:"h4",color:"secondary",align:"center"},"PAUSED"):r.a.createElement(E.a,{variant:"h4",align:"center"},null===h||void 0===h?void 0:h.text))),s?m?r.a.createElement(v.Flex,null,r.a.createElement(v.Flex,{flex:"1 1 0%",marginRight:"".concat(d.spacing(1),"px")},r.a.createElement(b.a,{fullWidth:!0,variant:"outlined",onClick:S},"Skip Turn")),r.a.createElement(v.Flex,{flex:"1 1 0%",marginLeft:"".concat(d.spacing(1),"px")},r.a.createElement(b.a,{fullWidth:!0,variant:"outlined",color:"primary",onClick:F},"Start Turn"))):r.a.createElement(v.Flex,null,r.a.createElement(v.Flex,{flex:"2 2 0%",marginLeft:"".concat(d.spacing(1),"px")},r.a.createElement(b.a,{fullWidth:!0,variant:"outlined",color:"primary",onClick:F},"Resume Turn"))):r.a.createElement(v.Flex,null,r.a.createElement(v.Flex,{flex:"1 1 0%",marginRight:"".concat(d.spacing(1),"px")},r.a.createElement(b.a,{fullWidth:!0,variant:"outlined",onClick:x,disabled:0===i&&c<=1},"Skip")),r.a.createElement(v.Flex,{flex:"2 2 0%",marginLeft:"".concat(d.spacing(1),"px")},r.a.createElement(b.a,{fullWidth:!0,variant:"outlined",color:"primary",onClick:R},"Got it!"))))},U=function(){var e=W(),t=G((function(e){return e.turns.active.paused})),a=G((function(e){return e.turns.active.timeRemaining})),r=Object(n.useState)(a),l=Object(k.a)(r,2),c=l[0],i=l[1],o=Object(n.useRef)();Object(n.useEffect)((function(){return i(a),t||(o.current=window.setInterval((function(){i((function(e){return e-1}))}),1e3)),function(){clearInterval(o.current)}}),[t,a]),Object(n.useEffect)((function(){c<0&&e({type:"END_TURN",payload:{}})}),[e,c]);var u=Object(n.useCallback)((function(){e(t?{type:"START_TURN",payload:{drawSeed:Math.random()}}:{type:"PAUSE_TURN",payload:{timeRemaining:c}})}),[e,c,t]);return[c,u]},V=function(){var e=O().id,t=G((function(e){return e.teams})),a=G((function(e){return e.activePlayer}));G((function(e){return e.turns.active})),t[a.team][a.index[a.team]],t[a.team].includes(e),G((function(e){return e.turns.active.paused&&e.turns.active.timeRemaining===e.settings.turnDuration}));return r.a.createElement(M,null)},L=function(){return r.a.createElement("div",null)},H=a(8),B=a(190),Y=a(189),q=a(191),J=a(192),K=a(193),z=a(194),X=a(195),Q=a(52),Z=function(){var e=O().id,t=G((function(e){return e.phase})),a=G((function(e){return e})),l=G(_.selectHost),c=W(),i=(null===l||void 0===l?void 0:l.id)===e,o=$(a,t),u=null!=o||!i,s=o||(i?ee(t):"".concat(null===l||void 0===l?void 0:l.name," will start the game...")),d=Object(n.useCallback)((function(){if("registration"===t){var e=Math.random()>.5?"orange":"blue",n=Object.values(a.players).reduce((function(e,t,a){return e[a%2===0?"orange":"blue"].push(t.id),e}),{orange:[],blue:[]});c({type:"ADVANCE_FROM_REGISTRATION",payload:{teams:n,firstTeam:e}})}"writing"===t&&c({type:"ADVANCE_FROM_WRITING",payload:{}}),"drafting"===t&&c({type:"ADVANCE_FROM_DRAFTING",payload:{}})}),[c,t,a]);return r.a.createElement(b.a,{fullWidth:!0,variant:"outlined",color:"primary",disabled:u,onClick:d},s)},$=function(e,t){if("registration"===t)return Object(_.selectNumberOfPlayers)(e)<4?"Waiting for 4 players...":null;if("writing"===t)return Object.keys(e.playerCards).length<1?"Waiting for everyone's cards...":null;if("drafting"===t){var a=e.teams,n=a.orange,r=a.blue;return n.length<2||r.length<2?"Teams must have 2 players...":null}return null},ee=function(e){switch(e){case"registration":return"Everyone is here!";case"writing":return"Choose Teams!";case"drafting":return"Start Game!"}return""},te=function(){O().id;var e=G((function(e){return e.players})),t=G((function(e){return e.teams})),a=W();return r.a.createElement(v.Flex,{flexDirection:"column",flex:"1 0 auto",padding:d.spacing(2)},r.a.createElement(v.Flex,{flex:"1 0 auto",flexDirection:"column",paddingBottom:d.spacing(2)},r.a.createElement(v.Flex,{alignItems:"center",justifyContent:"space-between"},r.a.createElement(ae,null,"Choose Your Teams...")),r.a.createElement(v.Flex,null,r.a.createElement(Q.a,{onDragEnd:function(e,n){console.log(e);var r=e.draggableId,l=e.source,c=e.destination;if(null!=(null===c||void 0===c?void 0:c.droppableId)&&(l.droppableId!==c.droppableId||l.index!==c.index)){var i=l.droppableId,o=c.droppableId,u={orange:Object(H.a)(t.orange),blue:Object(H.a)(t.blue)};u[i].splice(l.index,1),u[o].splice(c.index,0,r),a({type:"SET_TEAMS",payload:{teams:u}})}}},r.a.createElement(v.Flex,{flex:"1 1 0%",marginRight:2},r.a.createElement(Q.c,{droppableId:"orange"},(function(a,n){return r.a.createElement(B.a,Object.assign({component:Y.a,innerRef:a.innerRef},a.droppableProps),r.a.createElement(q.a,{"aria-label":"Players"},r.a.createElement(J.a,{style:{background:d.palette.secondary.main}},r.a.createElement(K.a,null,r.a.createElement(z.a,{style:{color:d.palette.secondary.contrastText,fontSize:16,fontWeight:"bold"}},"Orange"))),r.a.createElement(X.a,null,t.orange.map((function(t,a){return r.a.createElement(K.a,{key:t},r.a.createElement(ne,{player:e[t],index:a}))})),a.placeholder)))}))),r.a.createElement(v.Flex,{flex:"1 1 0%",marginLeft:2},r.a.createElement(Q.c,{droppableId:"blue"},(function(a,n){return r.a.createElement(B.a,Object.assign({component:Y.a,innerRef:a.innerRef},a.droppableProps),r.a.createElement(q.a,{"aria-label":"Players"},r.a.createElement(J.a,{style:{background:d.palette.primary.main}},r.a.createElement(K.a,null,r.a.createElement(z.a,{style:{color:d.palette.primary.contrastText,fontSize:16,fontWeight:"bold"}},"Blue"))),r.a.createElement(X.a,null,t.blue.map((function(t,a){return r.a.createElement(K.a,{key:t},r.a.createElement(ne,{player:e[t],index:a}))})),a.placeholder)))})))))),r.a.createElement(v.Flex,null,r.a.createElement(Z,null)))},ae=function(e){var t=e.children;return r.a.createElement(E.a,{style:{fontWeight:300,lineHeight:"36px"},color:"textSecondary",variant:"h6"},t)},ne=function(e){var t=e.player,a=e.index;return r.a.createElement(Q.b,{key:t.id,draggableId:t.id,index:a},(function(e,a){return console.log(a.isDragging),r.a.createElement(z.a,Object.assign({scope:"row",component:Y.a,square:!0,elevation:a.isDragging?2:0},e.draggableProps,{style:Object(P.a)({},e.draggableProps.style,{opacity:a.isDragging?.7:1})},e.dragHandleProps,{ref:e.innerRef}),t.name)}))},re=function(){return r.a.createElement("div",null,"Game over, man")},le=a(196),ce=a(197),ie=a(198),oe=a(209);function ue(){var e=Object(m.a)(["\n  flex-direction: column;\n  margin-bottom: ","px;\n"]);return ue=function(){return e},e}function se(){var e=Object(m.a)(["\n  border-bottom: 1px solid ",";\n  padding-bottom: ","px;\n  margin-bottom: ","px;\n"]);return se=function(){return e},e}function de(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 auto;\n"]);return de=function(){return e},e}var me=function(){var e=Object(T.d)((function(e){return e.settings})),t=W(),a=Object(u.g)(),l=Object(u.h)().params,c=Object(S.a)({defaultValues:{turnDuration:"".concat(e.turnDuration),cardsPerPlayer:"".concat(e.cardsPerPlayer),skipPenalty:-1===e.skipPenalty}}),i=c.register,o=c.handleSubmit,s=(0,c.watch)("skipPenalty"),m=Object(n.useCallback)((function(n){t({type:"SET_GAME_SETTINGS",payload:{settings:{turnDuration:parseInt(n.turnDuration),cardsPerPlayer:parseInt(n.cardsPerPlayer),skipPenalty:n.skipPenalty?-1:0,numberOfRounds:e.numberOfRounds}}}),a.push("/games/".concat(l.gameCode))}),[t,a,e,l]);return r.a.createElement(v.Flex,{flexDirection:"column",flex:"1 0 auto",padding:d.spacing(2)},r.a.createElement(fe,null,r.a.createElement(E.a,{variant:"h4",align:"center"},"game rules")),r.a.createElement(pe,{onSubmit:o(m)},r.a.createElement(v.Flex,{flex:"1 0 auto",flexDirection:"column"},r.a.createElement(ge,null,r.a.createElement(E.a,{variant:"body1",style:{fontWeight:"bold"},component:"label",htmlFor:"turnDuration"},"Time Per Turn"),r.a.createElement(E.a,{variant:"body2",style:{fontWeight:"lighter"},component:"label",htmlFor:"turnDuration"},"how much time does each player get on their turn?"),r.a.createElement(y.a,{width:"6em"},r.a.createElement(R.a,{id:"turnDuration",name:"turnDuration",type:"number",variant:"outlined",margin:"dense",inputRef:i({required:!0,min:1}),InputProps:{endAdornment:r.a.createElement(le.a,{position:"end"},"s"),inputProps:{required:!0,min:1}}}))),r.a.createElement(ge,null,r.a.createElement(E.a,{variant:"body1",style:{fontWeight:"bold"},component:"label",htmlFor:"cardsPerPlayer"},"Cards Per Player"),r.a.createElement(E.a,{variant:"body2",style:{fontWeight:"lighter"},component:"label",htmlFor:"cardsPerPlayer"},"how many cards will each player need to fill out?"),r.a.createElement(y.a,{width:"6em"},r.a.createElement(R.a,{id:"cardsPerPlayer",name:"cardsPerPlayer",type:"number",variant:"outlined",margin:"dense",inputRef:i({required:!0,min:1}),InputProps:{inputProps:{required:!0,min:1}}}))),r.a.createElement(ge,null,r.a.createElement(E.a,{variant:"body1",style:{fontWeight:"bold"},component:"label",htmlFor:"skipPenalty"},"Skip Penalty"),r.a.createElement(E.a,{variant:"body2",style:{fontWeight:"lighter"},component:"label",htmlFor:"skipPenalty"},"players lose a point (-1) for their team when they skip a card"),r.a.createElement(ce.a,null,r.a.createElement(ie.a,{control:r.a.createElement(oe.a,{id:"skipPenalty",name:"skipPenalty",defaultChecked:s,inputRef:i}),label:s?"-1 per skip":"no penalty"})))),r.a.createElement(v.Flex,null,r.a.createElement(b.a,{variant:"outlined",color:"primary",fullWidth:!0,type:"submit"},"Save"))))},pe=h.default.form(de()),fe=Object(h.default)(v.Flex)(se(),d.palette.divider,d.spacing(1),d.spacing(2)),ge=Object(h.default)(v.Flex)(ue(),d.spacing(2)),Ee=function(){var e=O(),t=e.id,a=e.name,l=Object(S.a)({mode:"onChange",defaultValues:{name:a}}),c=l.register,i=l.handleSubmit,o=l.formState,s=W(),m=Object(u.g)(),p=Object(u.h)().params,f=Object(n.useCallback)((function(e){var a=e.name;s({type:"JOIN_GAME",payload:{playerId:t,name:a}}),function(e){localStorage.setItem("PLAYER_NAME",e)}(a),m.push("/games/".concat(p.gameCode))}),[m,s,t,p]),g=o.isValid;return r.a.createElement(v.Flex,{flexDirection:"column",flex:"1 0 auto",padding:d.spacing(2)},r.a.createElement(v.Flex,{flex:"1 1 0%"}),r.a.createElement(v.Flex,{flexDirection:"column"},r.a.createElement(E.a,{variant:"h2",align:"center"},"Your Name"),r.a.createElement(E.a,{variant:"body1",align:"center"},"Tell everyone who you are!"),r.a.createElement(y.a,{m:4}),r.a.createElement("form",{onSubmit:i(f)},r.a.createElement(E.a,{variant:"h5"},r.a.createElement(R.a,{fullWidth:!0,name:"name",margin:"normal",variant:"outlined",placeholder:"ABCD",inputRef:c({required:!0}),InputProps:{inputProps:{style:{textAlign:"center",fontSize:d.spacing(4)}}}})),r.a.createElement(b.a,{variant:"outlined",color:"primary",fullWidth:!0,type:"submit",disabled:!g},"Save"))),r.a.createElement(v.Flex,{flex:"2 2 0%"}))},ye=a(199),be=a(200),ve=a(201),he=a(202);function xe(){var e=Object(m.a)(["\n  flex-direction: column;\n  border-bottom: 1px solid ",";\n  padding-bottom: ","px;\n  margin-bottom: ","px;\n"]);return xe=function(){return e},e}var Oe=function(){var e=O(),t=e.id,a=e.name,l=W(),c=Object(u.h)(),i=c.url,s=G((function(e){return e.hostId})),m=G(_.selectOrderedPlayers),p=t===s,f=Object(n.useCallback)((function(e){return t===e}),[t]),g=G((function(e){var t=e.settings,a=t.cardsPerPlayer,n=t.numberOfRounds,r=t.skipPenalty,l=t.turnDuration;return["".concat(n," rounds"),"".concat(a," cards per player"),"".concat(l," second turns"),"skips are ".concat(-1===r?"-1 points":"free")].join(", ")}));Object(n.useEffect)((function(){l({type:"JOIN_GAME",payload:{playerId:t,name:a}})}),[l,t,a]);var y=Object(n.useCallback)((function(e){l({type:"LEAVE_GAME",payload:{playerId:e}})}),[l]);return""===a?r.a.createElement(u.a,{to:"/games/".concat(c.params.gameCode,"/register")}):r.a.createElement(v.Flex,{flexDirection:"column",flex:"1 0 auto",padding:d.spacing(2)},r.a.createElement(v.Flex,{flexDirection:"column",marginBottom:"".concat(d.spacing(2),"px")},r.a.createElement(je,null,"Game Lobby"),r.a.createElement(Ce,{gameCode:c.params.gameCode}),p&&r.a.createElement(E.a,{variant:"caption"},"You are the host. Use this invite link to let your friends join. You will control this game's rules and when the game starts. Have fun!")),r.a.createElement(v.Flex,{flexDirection:"column",marginBottom:"".concat(d.spacing(2),"px")},r.a.createElement(v.Flex,{alignItems:"center",justifyContent:"space-between"},r.a.createElement(je,null,"Rules"),p&&r.a.createElement(ye.a,{component:o.b,to:"".concat(i,"/settings")},r.a.createElement(be.a,null))),r.a.createElement(E.a,{variant:"caption"},g)),r.a.createElement(v.Flex,{flex:"1 0 auto",flexDirection:"column"},r.a.createElement(v.Flex,{alignItems:"center",justifyContent:"space-between"},r.a.createElement(je,null,"Players")),r.a.createElement(B.a,{component:Y.a},r.a.createElement(q.a,{"aria-label":"Players"},r.a.createElement(X.a,null,m.map((function(e,t){return r.a.createElement(K.a,{key:e.id},r.a.createElement(z.a,{scope:"row"},t+1),r.a.createElement(z.a,{scope:"row",style:{width:"100%"}},e.name||"..."),r.a.createElement(z.a,{align:"right"},f(e.id)?r.a.createElement(ye.a,{component:o.b,to:"".concat(i,"/register"),style:{margin:"-16px"}},r.a.createElement(ve.a,null)):p&&r.a.createElement(ye.a,{onClick:function(){return y(e.id)},style:{margin:"-16px"}},r.a.createElement(he.a,null))))})))))),r.a.createElement(v.Flex,null,r.a.createElement(Z,null)))},Ce=function(e){var t=e.gameCode,a=Object(n.useState)(!1),l=Object(k.a)(a,2),c=l[0],i=l[1],o=Object(n.useRef)(),u=Object(n.useCallback)((function(){navigator.clipboard.writeText(window.location.href),i(!0),clearTimeout(o.current),o.current=window.setTimeout((function(){return i(!1)}),1500)}),[]);return r.a.createElement(y.a,{mb:1},r.a.createElement(b.a,{variant:"outlined",fullWidth:!0,onClick:u,color:"secondary"},r.a.createElement(v.Flex,{flexDirection:"column",alignItems:"center"},r.a.createElement(E.a,{variant:"h5"},t),r.a.createElement(E.a,{variant:"caption",align:"center"},c?"copied!":"copy invite link"))))},je=function(e){var t=e.children;return r.a.createElement(E.a,{style:{fontWeight:300,lineHeight:"36px"},color:"textSecondary",variant:"h6"},t)},Ie=(Object(h.default)(v.Flex)(xe(),d.palette.divider,d.spacing(1),d.spacing(2)),function(){var e=Object(u.h)().path;return r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"".concat(e,"/settings"),exact:!0,component:me}),r.a.createElement(u.b,{path:"".concat(e,"/register"),exact:!0,component:Ee}),r.a.createElement(u.b,{path:e,component:Oe}))});function Pe(){var e=Object(m.a)(["\n  flex-direction: column;\n  margin-bottom: ","px;\n"]);return Pe=function(){return e},e}function Re(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 auto;\n"]);return Re=function(){return e},e}var Se=["Darth Vader","Arachnophobia","Band Camp"],Fe=function(){var e=O().id,t=W(),a=Object(u.g)(),l=Object(u.h)().params,c=G((function(e){return e.settings.cardsPerPlayer})),i=G((function(t){return t.playerCards[e]||[]})),o=Object(S.a)({mode:"onChange",defaultValues:{cards:i.map((function(e){return e.text}))}}),s=o.register,m=o.handleSubmit,p=o.formState,f=Object(n.useCallback)((function(n){var r=n.cards;t({type:"SUBMIT_CARDS",payload:{playerId:e,cards:r.map((function(e){return{id:Object(x.a)(),text:e}}))}}),a.push("/games/".concat(l.gameCode))}),[a,t,e,l]),g=p.isValid;return r.a.createElement(v.Flex,{flexDirection:"column",flex:"1 0 auto",padding:d.spacing(2)},r.a.createElement(E.a,{variant:"h2"},"Write Your Cards"),r.a.createElement(E.a,{variant:"caption"},"Using the words and phrases everyone writes on their cards, you will take turns giving clues and getting your team to guess what is on the cards. A good card will be a word or phrase that everyone in your group will know and understand. Be creative and think about how you can get some laughs!"),r.a.createElement(y.a,{m:4}),r.a.createElement(ke,{onSubmit:m(f)},Object(H.a)(Array(c)).map((function(e,t){return console.log(t),r.a.createElement(Te,{key:t},r.a.createElement(E.a,{variant:"body1",style:{fontWeight:"bold"},component:"label",htmlFor:"cards[".concat(t,"]")},"Card #",t+1),r.a.createElement(R.a,{fullWidth:!0,id:"cards[".concat(t,"]"),name:"cards[".concat(t,"]"),margin:"dense",variant:"outlined",placeholder:Se[t]||"...",inputRef:s({required:!0})}))})),r.a.createElement(v.Flex,{flex:"1 1 0%"}),r.a.createElement(b.a,{variant:"outlined",color:"primary",fullWidth:!0,type:"submit",disabled:!g},"Ready!")))},ke=h.default.form(Re()),Te=Object(h.default)(v.Flex)(Pe(),d.spacing(2)),we=a(203),De=function(){var e=O().id,t=Object(u.h)().params,a=G(_.selectOrderedPlayers),l=G((function(e){return e.playerCards})),c=Object(n.useCallback)((function(e){return null!=l[e]}),[l]);return null==l[e]?r.a.createElement(u.a,{to:"/games/".concat(t.gameCode,"/cards")}):r.a.createElement(v.Flex,{flexDirection:"column",flex:"1 0 auto",padding:d.spacing(2)},r.a.createElement(v.Flex,{flex:"1 0 auto",flexDirection:"column"},r.a.createElement(v.Flex,{alignItems:"center",justifyContent:"space-between"},r.a.createElement(Ae,null,"Writing Cards...")),r.a.createElement(B.a,{component:Y.a},r.a.createElement(q.a,{"aria-label":"Players"},r.a.createElement(X.a,null,a.map((function(a,n){return r.a.createElement(K.a,{key:a.id},r.a.createElement(z.a,{scope:"row",style:{width:"100%"}},a.name),r.a.createElement(z.a,{align:"right"},a.id===e?r.a.createElement(ye.a,{component:o.b,to:"/games/".concat(t.gameCode,"/cards"),style:{margin:"-16px"}},r.a.createElement(ve.a,null)):c(a.id)&&r.a.createElement(we.a,null)))})))))),r.a.createElement(v.Flex,null,r.a.createElement(Z,null)))},Ae=function(e){var t=e.children;return r.a.createElement(E.a,{style:{fontWeight:300,lineHeight:"36px"},color:"textSecondary",variant:"h6"},t)},_e=function(){var e=Object(u.h)().path;return r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"".concat(e,"/cards"),exact:!0,component:Fe}),r.a.createElement(u.b,{path:e,component:De}))},Ne=function(e){var t=Object(n.useState)(null),a=Object(k.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(!1),o=Object(k.a)(i,2),u=o[0],s=o[1],d=e.match.params.gameCode;return Object(n.useEffect)((function(){var e=D()("http://localhost:3001",{query:{gameCode:d}}),t=function(){e.removeAllListeners(),e.disconnect()},a=null;return e.on("connect",(function(){console.log("socket connect"),e.on("message",(function(n){if(console.log("socket message",n),console.log(n),"SERVER_NOT_FOUND"===n.type&&(s(!0),t()),"SERVER_INIT_STATE"===n.type){var r=n.payload;a=function(e,t){return Object(A.d)(_.GameReducer,e,N(Object(A.a)((function(){return function(e){return function(a){t(a),e(a)}}}))))}(r,(function(t){console.log("action middleware",e.send),"SERVER_UPDATE_STATE"!==t.type&&e.send(t)})),c(a)}var l;"SERVER_UPDATE_STATE"===n.type&&(null===(l=a)||void 0===l||l.dispatch(n))}))})),t}),[d]),u?r.a.createElement("div",null,"404 not found gameCode"):null==l?r.a.createElement("div",null,"loading..."):r.a.createElement(T.a,{store:l},r.a.createElement(We,null))},We=function(){switch(G((function(e){return e.phase}))){case"registration":return r.a.createElement(Ie,null);case"writing":return r.a.createElement(_e,null);case"drafting":return r.a.createElement(te,null);case"active":return r.a.createElement(V,null);case"canceled":return r.a.createElement(L,null);case"ended":return r.a.createElement(re,null)}},Ge=function(){return Object(n.useEffect)((function(){null==localStorage.getItem("PLAYER_ID")&&localStorage.setItem("PLAYER_ID",Object(x.a)())}),[]),r.a.createElement(i.a,{theme:d},r.a.createElement(o.a,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0,component:j}),r.a.createElement(u.b,{path:"/join",exact:!0,component:F}),r.a.createElement(u.b,{path:"/games/:gameCode",component:Ne}),r.a.createElement(u.b,{path:"/",component:Me}))))},Me=function(){return r.a.createElement("div",null,"404 NOT FOUND")};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ge,null)),document.getElementById("root"))},24:function(e,t,a){"use strict";var n=a(94);a.o(n,"GameReducer")&&a.d(t,"GameReducer",(function(){return n.GameReducer})),a.o(n,"selectActivePlayer")&&a.d(t,"selectActivePlayer",(function(){return n.selectActivePlayer})),a.o(n,"selectCards")&&a.d(t,"selectCards",(function(){return n.selectCards})),a.o(n,"selectHost")&&a.d(t,"selectHost",(function(){return n.selectHost})),a.o(n,"selectNumberOfPlayers")&&a.d(t,"selectNumberOfPlayers",(function(){return n.selectNumberOfPlayers})),a.o(n,"selectOrderedPlayers")&&a.d(t,"selectOrderedPlayers",(function(){return n.selectOrderedPlayers}));var r=a(43);a.d(t,"selectActivePlayer",(function(){return r.a})),a.d(t,"selectCards",(function(){return r.b})),a.d(t,"selectHost",(function(){return r.c})),a.d(t,"selectNumberOfPlayers",(function(){return r.d})),a.d(t,"selectOrderedPlayers",(function(){return r.e}));var l=a(95);a.d(t,"GameReducer",(function(){return l.a}))},43:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return c})),a.d(t,"d",(function(){return i})),a.d(t,"e",(function(){return o}));var n=function(){return(n=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=function(e){var t=e.hostId;return e.players[t]},l=function(e){var t=e.teams,a=e.activePlayer,n=a.team,r=a.index;return e.players[t[n][r[n]]]},c=function(e){return Object.values(e.playerCards).flatMap((function(e){return e})).reduce((function(e,t){var a;return n(n({},e),((a={})[t.id]=t,a))}),{})},i=function(e){return Object.keys(e.players).length},o=function(e){return Object.values(e.players).sort((function(e,t){return e.joinOrder-t.joinOrder}))}},94:function(e,t){},95:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(43),r=function(){return(r=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function l(e){var t,a=e.activePlayer,n=a.team,l=a.index,c=l[n]>=e.teams[n].length-1?0:l[n]+1;return r(r({},e),{activePlayer:{team:n,index:r(r({},l),(t={},t[n]=c,t))}})}function c(e,t){return r(r({},e),{turns:{active:{isFresh:!0,paused:!0,timeRemaining:null!==t&&void 0!==t?t:e.settings.turnDuration,activeCardId:"",guessedCardIds:{},skippedCardIds:{}},recap:{team:e.activePlayer.team,guessedCardIds:Object.keys(e.turns.active.guessedCardIds),skippedCardCount:Object.keys(e.turns.active.skippedCardIds).length}}})}function i(e,t,a){var l=e.round.guessedCardIds,i=e.turns.active.skippedCardIds,o=Object.keys(Object(n.b)(e)).filter((function(e){return!(l[e]||i[e])})),u=Object.keys(i).filter((function(e){return!l[e]})),s=null;if(o.length>0)s=o[Math.floor(t*o.length)];else{if(!(u.length>0))return function(e,t){var a=e.round.number+1,n=a>e.settings.numberOfRounds?"ended":e.phase;return r(r({},c(e,t)),{round:{number:a,guessedCardIds:{}},phase:n})}(e,a);var d=u.indexOf(e.turns.active.activeCardId)+1;d>u.length-1&&(d=0),s=u[d]}return r(r({},e),{turns:r(r({},e.turns),{active:r(r({},e.turns.active),{activeCardId:s})})})}var o=function(){return(o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},u=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},s={gameCode:"",phase:"registration",playerCards:{},activePlayer:{team:"orange",index:{orange:0,blue:0}},hostId:"",players:{},round:{guessedCardIds:{},number:0},score:{orange:0,blue:0},settings:{cardsPerPlayer:3,numberOfRounds:3,skipPenalty:-1,turnDuration:45},teams:{orange:[],blue:[]},turns:{active:{activeCardId:"",isFresh:!0,paused:!0,timeRemaining:45,guessedCardIds:{},skippedCardIds:{}},recap:null}};function d(e,t){return function(e){var t="blue"===e.activePlayer.team?"orange":"blue";return l(r(r({},e),{activePlayer:r(r({},e.activePlayer),{team:t})}))}(e=c(e))}function m(e,t){switch(void 0===e&&(e=s),t.type){case"ADVANCE_FROM_REGISTRATION":return function(e,t){var a=t.payload,r=a.teams,l=a.firstTeam;return"registration"!==e.phase||Object(n.d)(e)<4?e:o(o({},e),{teams:r,activePlayer:{team:l,index:{orange:0,blue:0}},phase:"writing"})}(e,t);case"ADVANCE_FROM_WRITING":return function(e,t){return"writing"!==e.phase||Object.keys(e.playerCards).length<1?e:o(o({},e),{phase:"drafting"})}(e);case"ADVANCE_FROM_DRAFTING":return function(e,t){if("drafting"!==e.phase)return e;var a=e.teams,r=a.orange,l=a.blue;return r.length<2||l.length<2||r.length+l.length!==Object(n.d)(e)?e:o(o({},e),{phase:"active",round:{number:1,guessedCardIds:{}},turns:{active:{activeCardId:"",isFresh:!0,paused:!0,timeRemaining:e.settings.turnDuration,guessedCardIds:{},skippedCardIds:{}},recap:{team:e.activePlayer.team,guessedCardIds:[],skippedCardCount:0}}})}(e);case"SET_GAME_SETTINGS":return function(e,t){return o(o({},e),{settings:t.payload.settings})}(e,t);case"JOIN_GAME":return function(e,t){var a,n,r;if("registration"!==e.phase)return e;var l=t.payload,c=l.playerId,i=l.name,u=null!==(r=null===(n=e.players[c])||void 0===n?void 0:n.joinOrder)&&void 0!==r?r:Math.max.apply(Math,Object.values(e.players).map((function(e){return e.joinOrder})))+1;return o(o({},e),{players:o(o({},e.players),(a={},a[c]={id:c,name:i,joinOrder:u},a))})}(e,t);case"LEAVE_GAME":return function(e,t){if("registration"!==e.phase)return e;var a=t.payload.playerId,n=e.players,r=a,l=(n[r],u(n,["symbol"===typeof r?r:r+""]));return o(o({},e),{players:l})}(e,t);case"SUBMIT_CARDS":return function(e,t){var a;if("writing"!==e.phase)return e;var n=t.payload,r=n.playerId,l=n.cards;return o(o({},e),{playerCards:o(o({},e.playerCards),(a={},a[r]=l,a))})}(e,t);case"SET_TEAMS":return function(e,t){if("drafting"!==e.phase)return e;var a=t.payload.teams;return o(o({},e),{teams:a})}(e,t);case"SKIP_TURN":return function(e,t){return"active"!==e.phase?e:e.turns.active.isFresh?l(e):e}(e);case"START_TURN":return function(e,t){if("active"!==e.phase)return e;var a=t.payload.drawSeed;return e.turns.active.isFresh&&(e=i(e,a,e.turns.active.timeRemaining)),o(o({},e),{round:o({},e.round),turns:o(o({},e.turns),{active:o(o({},e.turns.active),{isFresh:!1,paused:!1})})})}(e,t);case"PAUSE_TURN":return function(e,t){if("active"!==e.phase)return e;var a=t.payload.timeRemaining;return o(o({},e),{round:o({},e.round),turns:o(o({},e.turns),{active:o(o({},e.turns.active),{paused:!0,timeRemaining:a})})})}(e,t);case"END_TURN":return d(e);case"GOT_CARD":return function(e,t){var a,n,r;if("active"!==e.phase)return e;if(e.turns.active.paused)return e;var l=t.payload,c=l.cardId,u=l.timeRemaining,s=l.drawSeed;if(c!==e.turns.active.activeCardId)return e;if(e.round.guessedCardIds[c])return e;var d=e.activePlayer.team;return e=i(e=o(o({},e),{score:o(o({},e.score),(a={},a[d]=e.score[d]+1,a)),round:o(o({},e.round),{guessedCardIds:o(o({},e.round.guessedCardIds),(n={},n[c]=!0,n))}),turns:o(o({},e.turns),{active:o(o({},e.turns.active),{guessedCardIds:o(o({},e.round.guessedCardIds),(r={},r[c]=!0,r))})})}),s,u)}(e,t);case"SKIP_CARD":return function(e,t){var a,n;if("active"!==e.phase)return e;if(e.turns.active.paused)return e;var r=t.payload,l=r.cardId,c=r.drawSeed;if(!e.turns.active.skippedCardIds[l]){var u=e.activePlayer.team;e=o(o({},e),{score:o(o({},e.score),(a={},a[u]=e.score[u]+e.settings.skipPenalty,a)),turns:o(o({},e.turns),{active:o(o({},e.turns.active),{skippedCardIds:o(o({},e.turns.active.skippedCardIds),(n={},n[l]=!0,n))})})})}return i(e,c,0)}(e,t);case"SERVER_UPDATE_STATE":return t.payload;default:return e}}}},[[119,1,2]]]);
//# sourceMappingURL=main.2abcf6ef.chunk.js.map