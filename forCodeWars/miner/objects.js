import { MinerButton } from "./Classes.js";
import { LinkList } from "./Classes.js";
export const areaOfBombs = document.getElementsByName("minerButtons");
export const placesMass = [];
export const linkedMass = [];
export const lines = 4;
function randomize(){
    let random = Math.floor(Math.random() * 8)
        if(random < 1){
             return 1;
        }else{
            return 0
        }
}
// export let mass = Array.from({length: lines}, ()=>
//     Array.from({length: lines}, () => randomize())
// )
export let newButtonsMatr = Array.from({length: lines}, ()=>
Array.from({length: lines}, ()=>0))
let count = 0;
for (let i = 0; i < areaOfBombs.length; i++) {
  placesMass.push(new MinerButton(areaOfBombs[i], i));
  placesMass[i].getValue();
  placesMass[i].getXY(lines);
  linkedMass.push(new LinkList(placesMass[i].XY, placesMass[i]))
}
for (let i = 0; i < newButtonsMatr.length; i++){
    for(let j = 0; j < newButtonsMatr[i].length; j++){
        if(placesMass.length > count){
            newButtonsMatr[i][j] = new MinerButton(areaOfBombs[count++],[i,j])
            newButtonsMatr[i][j].getValue();
        }
    }
}