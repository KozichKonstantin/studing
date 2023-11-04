import { placesMass } from "./objects.js";
import { areaOfBombs } from "./objects.js";
import { newButtonsMatr } from "./objects.js";
import { linkedMass } from "./objects.js";
// import { mass } from "./objects.js";
for(let i =0 ; i < areaOfBombs.length; i++){
    document.getElementsByClassName('place')[i].addEventListener('click', ()=>{
        placesMass[i].clicked = true;
        if(placesMass[i].value == 1){
            placesMass[i].place.style.background = 'red'
        }else{
            placesMass[i].place.style.background = 'black'
            console.log(newButtonsMatr)
            placesMass[i].place.value = newButtonsMatr[i%4][(i-i%4)/4].minesAround
        }
    })
}