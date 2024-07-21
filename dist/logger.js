"use strict";
//import { games } from "./store";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartLogger = StartLogger;
const store_1 = require("./store");
function StartLogger() {
    setInterval(() => {
        console.log(store_1.gameGameManager.logState());
    }, 1000);
}
