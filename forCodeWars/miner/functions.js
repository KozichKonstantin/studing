import { newButtonsMatr } from "./objects.js";
import { lines } from "../listeners.js";
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
  if (i>=0 && j>=0 && i<lines && j<lines) {
    console.log(i, j, 'isExsist: true')
    return true;
  } else {
    console.log(i, j, 'isExsist: false')
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
checker()
for(let i = 0; i < newButtonsMatr.length; i++){
    for(let j = 0; j < newButtonsMatr[i].length; j++){
        newButtonsMatr[i][j].minesAround = weightMatrix[i][j]
    }
}