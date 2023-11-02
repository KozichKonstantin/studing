import { MinerButton } from "./Classes.js";
import { LinkList } from "./Classes.js";
export const areaOfBombs = document.getElementsByName("minerButtons");
export const placesMass = [];
export const linkedMass = [];
export const lines = 4;
for (let i = 0; i < areaOfBombs.length; i++) {
  placesMass.push(new MinerButton(areaOfBombs[i], i));
  placesMass[i].getValue();
  placesMass[i].getXY(lines);
  linkedMass.push(new LinkList(placesMass[i].XY, placesMass[i]))
}
