//import { games } from "./store";

import { GameManager,gameGameManager} from "./store";

export function StartLogger(){
    setInterval(()=>{
        console.log(gameGameManager.logState()); 
    },1000)

}