import { placesMass } from "./objects.js";
const variations = [
    (x)=>{return x-1},
    (x)=>{return x+1},
    (x)=>{return x-4},
    (x)=>{return x+4},
    (x)=>{return x-5},
    (x)=>{return x+5},
    (x)=>{return x-3},
    (x)=>{return x+3}
]
function checkIt(i){
    for(let j = 0; j < 8; j++){
        if(placesMass[variations[j](i)] != undefined && placesMass[variations[j](i)].value ==1){
            console.log(placesMass[i] , placesMass[variations[j](i)])
            placesMass[i].minesAround = placesMass[i].minesAround + 1
        }
    }
}
for(let i =0; i < placesMass.length; i++){
    checkIt(i)
}