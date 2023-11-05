import { MinerButton } from "./Classes.js";
import { lines } from "../listeners.js";
export const areaOfBombs = document.getElementsByName("minerButtons");
export const placesMass = [];
export const linkedMass = [];
export let newButtonsMatr = Array.from({length: lines}, ()=>
Array.from({length: lines}, ()=>0));
let count = 0;
for (let i = 0; i < newButtonsMatr.length; i++){
    for(let j = 0; j < newButtonsMatr[i].length; j++){
        if(lines*lines > count){
            newButtonsMatr[i][j] = new MinerButton(areaOfBombs[count++],[i,j])
            newButtonsMatr[i][j].getValue();
        }
    }
}