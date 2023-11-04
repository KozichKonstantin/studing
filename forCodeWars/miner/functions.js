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
    if(newButtonsMatr[position[0]+1][position[1]].value != undefined){
        object.minesAround = object.minesAround+1;
    }
    if(newButtonsMatr[position[0]-1][position[1]].value != undefined){
        object.minesAround = object.minesAround+1;
    }
    if(newButtonsMatr[position[0]][position[1]+1].value != undefined){
        object.minesAround = object.minesAround+1;
    }
    if(newButtonsMatr[position[0]][position[1]-1].value != undefined){
        object.minesAround = object.minesAround+1;
    }
    if(newButtonsMatr[position[0]-1][position[1]+1].value != undefined){
        object.minesAround = object.minesAround+1;
    }
    if(newButtonsMatr[position[0]-1][position[1]-1].value != undefined){
        object.minesAround = object.minesAround+1;
    }
    if(newButtonsMatr[position[0]+1][position[1]-1].value != undefined){
        object.minesAround = object.minesAround+1;
    }
    if(newButtonsMatr[position[0]+1][position[1]+1].value != undefined){
        object.minesAround = object.minesAround+1;
    }
}
for(let i =0; i < newButtonsMatr.length; i++){
    for(let j = 0 ; j < newButtonsMatr[i].length; j++){
        checkBombs(newButtonsMatr[i][j])
    }
}
// function vario(k,j){
//     for(let i = 0; i < 8; i++){
//         if(variations[i](linkedMass[k].XY) == linkedMass[j].XY){
//             linkedMass[i].object.minesAround = linkedMass[i].object.minesAround + 1

//         }
//     }
// }
// function checkIt(i){
//     for(let j = 0; j < placesMass.length ; j++){
//         vario(i,j)
//     }
// }

// for(let i =0; i < placesMass.length; i++){
//     checkIt(i)
// }