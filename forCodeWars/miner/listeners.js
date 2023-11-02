import { placesMass } from "./objects.js";
import { areaOfBombs } from "./objects.js";
for(let i =0 ; i < areaOfBombs.length; i++){
    document.getElementsByClassName('place')[i].addEventListener('click', ()=>{
        placesMass[i].clicked = true;
        if(placesMass[i].value == 1){
            placesMass[i].place.style.background = 'red'
        }else{
            placesMass[i].place.style.background = 'black'
            console.log(placesMass[i].XY, placesMass[i].number)
            placesMass[i].place.value = placesMass[i].minesAround
        }
    })
}