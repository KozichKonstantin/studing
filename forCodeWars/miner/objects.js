import { MinerButton } from "./Classes.js";
export const areaOfBombs = document.getElementsByName("minerButtons");
export const placesMass = [];
export const lines = 4;
for (let i = 0; i < areaOfBombs.length; i++) {
  placesMass.push(new MinerButton(areaOfBombs[i], i));
  placesMass[i].getValue();
  placesMass[i].getXY(lines);
}
