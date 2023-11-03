import { placesMass } from "./objects.js";
import { newButtonsMatr } from "./objects.js";
import { linkedMass } from "./objects.js";
const variations = [
    /***
     * 
     * 
     * какая-то лютая залупа вышла
     * 
     */
    (x)=> (x),
    (x)=> (x+1),
    (x)=>(x-1)
]
function checkBombs(object){
    let position = object.number;
    for(let i =0; i< 3; i++){
        for(let j =0; j < 3; j++){
            if(newButtonsMatr[variations[i](position[0])].[variations[j](position[1])].value == 1){
                
            }
        }
    }
}
function vario(k,j){
    for(let i = 0; i < 8; i++){
        // console.log(variations[i](linkedMass[k].XY))
        if(variations[i](linkedMass[k].XY) == linkedMass[j].XY){
            linkedMass[i].object.minesAround = linkedMass[i].object.minesAround + 1

        }
    }
}
function checkIt(i){
    for(let j = 0; j < placesMass.length ; j++){
        vario(i,j)
    }
}

for(let i =0; i < placesMass.length; i++){
    checkIt(i)
}