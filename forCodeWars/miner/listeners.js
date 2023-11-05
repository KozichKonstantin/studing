import { lines } from "./setup.js";
import { newButtonsMatr } from "./objects.js";
for(let i =0 ; i < lines ; i++){
    for(let  j =0 ; j < lines; j++){
        newButtonsMatr[i][j].place.addEventListener('click', ()=>{
            newButtonsMatr[i][j].clickFunct(true);
        })
    }
}