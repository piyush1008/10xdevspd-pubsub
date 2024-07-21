"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PubSubManager_1 = require("./PubSubManager");
// StartLogger();
// setInterval(()=>{
//     // games.push({
//     //     id: Math.random().toString(36),
//     //     whitePlayer: "Player 1",
//     //     BlackPlayer: "Player 2",
//     //     move:[]
//     // })
//     console.log("New Game Started");
//     gameGameManager.addGame({
//         id: Math.random().toString(36),
//         whitePlayer: "Player 1",
//         BlackPlayer: "Player 2",
//         move:[]
//     })
// },5000)
setInterval(() => {
    PubSubManager_1.PubSubManager.getInstance().userSubscribe(Math.random().toString(), "APPL");
}, 5000);
