import { MinerButton } from "./Classes.js";
export const areaOfBombs = document.getElementsByName('minerButtons')
export const placesMass = []
for(let i = 0 ; i < areaOfBombs.length; i++){
    placesMass.push(new MinerButton(areaOfBombs[i]));
    placesMass[i].getValue();
}
