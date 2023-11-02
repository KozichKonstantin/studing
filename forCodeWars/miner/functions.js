import { placesMass } from "./objects.js";
const variations = [
    (x,y)=>[x+1, y],
    (x,y)=>[x-1,y],
    (x,y)=>[x, y+1],
    (x,y)=>[x, y-1],
    (x,y)=>[x+1, y+1],
    (x,y)=>[x-1, y-1],
    (x,y)=>[x-1, y+1],
    (x,y)=>[x+1, y-1]
]
function checkIt(i){
    for(let j = 0; j < 8; j++){
        if(placesMass[variations[j](i)] != undefined && placesMass[variations[j](i)].value ==1){
            console.log(placesMass[i] , placesMass[variations[j](i)])
            placesMass[i].minesAround = placesMass[i].minesAround + 1
        }
    }
    for(let j =0; j < placesMass.length; j++){
        for(let k =0; k< 8; k++){
            if(variations[k](placesMass[j].XY[0], placesMass[j].XY[1]) != undefined && placesMass[j].value == 1){
                placesMass[i].minesAround = placesMass[i].minesAround + 1
            }
        }
    }
}

for(let i =0; i < placesMass.length; i++){
    checkIt(i)
}