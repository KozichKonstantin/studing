import { newButtonsMatr } from "./functions.js";
for(let i = 0 ; i < newButtonsMatr.length; i ++){
    for(let j =0; j < newButtonsMatr[i].length; j++){
        newButtonsMatr[i][j].place.addEventListener('click', ()=>{
            newButtonsMatr[i][j].clickFunct(true)
            console.log(newButtonsMatr)
        })
    }
}