import { lines } from "../listeners.js";
import { newButtonsMatr } from "./objects.js";
export function getClicks() {
  for (let i = 0; i < lines; i++) {
    for (let j = 0; j < lines; j++) {
      console.log(newButtonsMatr);
      newButtonsMatr[i][j].place.addEventListener("click", () => {
        newButtonsMatr[i][j].clickFunct(true);
      });
    }
  }
}
export function startSapper() {
  let sapperDocs = [
    // document.createElement('script'),
    document.createElement("script"),
    document.createElement("script"),
    document.createElement("script"),
  ];
  let waysMass = [
    "./miner/Classes.js",
    "./miner/objects.js",
    "./miner/functions.js",
  ];
  for (let i = 0; i < sapperDocs.length; i++) {
    sapperDocs[i].src = waysMass[i];
    sapperDocs[i].type = "module";
    document.getElementsByTagName("body")[0].append(sapperDocs[i]);
  }
}
