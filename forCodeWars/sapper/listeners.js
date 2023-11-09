import { newButtonsMatr } from "./functions.js";
import { Sapper } from "./objects.js";
import { openClosed } from "./functions.js";
import { gameEnded } from "./functions.js";
import { buildEnd } from "./functions.js";
// console.log(newButtonsMatr);
for (let i = 0; i < newButtonsMatr.length; i++) {
  for (let j = 0; j < newButtonsMatr[i].length; j++) {
    newButtonsMatr[i][j].place.addEventListener("click", () => {
      console.log("listener");
      newButtonsMatr[i][j].clickFunct(true);
      openClosed(i, j);
      buildEnd(gameEnded(newButtonsMatr))
      if(document.getElementsByClassName('finish')[0] != undefined){
        document.getElementsByClassName('finish')[0].addEventListener('click', function(){
          Sapper.retryGame()
          this.remove()
        })
      }
    });
  }
}
