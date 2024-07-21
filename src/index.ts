import { StartLogger } from "./logger";
import { PubSubManager } from "./PubSubManager";
// import { games } from "./store";

import { GameManager,gameGameManager } from "./store";


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
    PubSubManager.getInstance().userSubscribe(Math.random().toString(), "APPL");
}, 5000)