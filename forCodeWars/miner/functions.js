import { placesMass } from "./objects.js";
import { newButtonsMatr } from "./objects.js";
import { linkedMass } from "./objects.js";
import { lines } from "./objects.js";
const variations = [
  /***
   *
   *
   * какая-то лютая залупа вышла
   *
   */
  (x) => x,
  (x) => x + 1,
  (x) => x - 1,
];
let maskMass = Array.from({ length: lines }, () =>
  Array.from({ length: lines }, () => 0)
);
let weightMatrix = Array.from({ length: lines }, () =>
  Array.from({ length: lines }, () => 0)
);
for (let i = 0; i < newButtonsMatr.length; i++) {
  for (let j = 0; j < newButtonsMatr[i].length; j++) {
    maskMass[i][j] = newButtonsMatr[i][j].value;
  }
}
function isExist(i, j) {
    console.log(i, j )
  if (weightMatrix[i][j] != undefined) {
    return true;
  } else {
    return false;
  }
}
function checker() {
  for (let i = 0; i < maskMass.length; i++) {
    for (let j = 0; j < maskMass[i].length; j++) {
      if (maskMass[i][j] == 1) {
        if (isExist(i - 1, j)) {
          weightMatrix[i - 1][j]++;
        }
        if (isExist(i + 1, j)) {
            weightMatrix[i + 1][j]++;
          }
        if (isExist(i, j+1)) {
            weightMatrix[i][j + 1]++;
          }
        if(isExist(i, j-1)){
            weightMatrix[i][j - 1]++;
        }
        if(isExist(i+1, j+1)){
            weightMatrix[i + 1][j + 1]++;
        }
        if(isExist(i-1, j-1)){
            weightMatrix[i - 1][j - 1]++;
        }
        if(isExist(i+1, j-1)){
            weightMatrix[i + 1][j - 1]++;
        }
        if(isExist(i-1, j+1)){
            weightMatrix[i - 1][j + 1]++;
        }
      }
    }
  }
}
checker();
for(let i = 0; i < newButtonsMatr.length; i++){
    for(let j = 0; j < newButtonsMatr[i].length; j++){
        newButtonsMatr[i][j].minesAround = weightMatrix[i][j]
    }
}
console.log(maskMass);
console.log(weightMatrix);
// for (let i = 0; i < newButtonsMatr.length; i++) {
//   for (let j = 0; j < newButtonsMatr[i].length; j++) {
//     checkBombs(newButtonsMatr[i][j]);
//   }
// }

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
