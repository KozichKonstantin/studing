import { placesMass } from "./objects.js";
import { linkedMass } from "./objects.js";
const variations = [
    /***
     * 
     * 
     * какая-то лютая залупа вышла
     * 
     */
    (x,y)=>[x+1, y],
    (x,y)=>[x-1,y],
    (x,y)=>[x, y+1],
    (x,y)=>[x, y-1],
    (x,y)=>[x+1, y+1],
    (x,y)=>[x-1, y-1],
    (x,y)=>[x-1, y+1],
    (x,y)=>[x+1, y-1]
]
function vario(k,j){
    for(let i = 0; i < 8; i++){
        console.log(variations[i](linkedMass[k].XY))
        if(variations[i](linkedMass[k].XY) == linkedMass[j].XY){
            linkedMass[i].object.minesAround = linkedMass[i].object.minesAround + 1

        }
    }
}
function checkIt(i){
    // for(let j = 0; j < 8; j++){
    //     if(placesMass[variations[j](i)] != undefined && placesMass[variations[j](i)].value ==1){
    //         console.log(placesMass[i] , placesMass[variations[j](i)])
    //         placesMass[i].minesAround = placesMass[i].minesAround + 1
    //     }
    // }
    for(let j = 0; j < placesMass.length ; j++){
        vario(i,j)
    }
}

for(let i =0; i < placesMass.length; i++){
    checkIt(i)
}