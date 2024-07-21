"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameGameManager = exports.GameManager = void 0;
// export const games : Game[]=[];
class GameManager {
    constructor() {
        this.games = [];
        this.games = [];
    }
    static getInstance() {
        if (GameManager.instance) {
            return GameManager.instance;
        }
        GameManager.instance = new GameManager();
        return GameManager.instance;
    }
    addGame(game) {
        this.games.push(game);
    }
    getGames() {
        return this.games;
    }
    // e5e7
    addMove(gameId, move) {
        const game = this.games.find(game => game.id === gameId);
        if (game) {
            game.move.push(move);
        }
    }
    logState() {
        console.log(this.games);
    }
}
exports.GameManager = GameManager;
//export const gameGameManager = new GameManager(); 
exports.gameGameManager = GameManager.getInstance();
