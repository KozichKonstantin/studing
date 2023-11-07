import { newButtonsMatr } from "./functions.js";
import { openClosed } from "./functions.js";
console.log(newButtonsMatr);
for (let i = 0; i < newButtonsMatr.length; i++) {
  for (let j = 0; j < newButtonsMatr[i].length; j++) {
    newButtonsMatr[i][j].place.addEventListener("click", () => {
      console.log("listener");
      newButtonsMatr[i][j].clickFunct(true);
      openClosed(i, j);
    });
  }
}