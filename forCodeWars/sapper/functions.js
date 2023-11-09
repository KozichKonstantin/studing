import { Sapper } from "./objects.js";
import { MinerButton } from "./Classes.js";
export const lines = Sapper.variable;
export let newButtonsMatr = Array.from({ length: lines }, () =>
  Array.from({ length: lines }, () => 0)
);
let count = 0;
let maskMass = Array.from({ length: lines }, () =>
  Array.from({ length: lines }, () => 0)
);
let weightMatrix = Array.from({ length: lines }, () =>
  Array.from({ length: lines }, () => 0)
);
for (let i = 0; i < newButtonsMatr.length; i++) {
  for (let j = 0; j < newButtonsMatr[i].length; j++) {
    if (lines * lines > count) {
      newButtonsMatr[i][j] = new MinerButton(Sapper.play.controls[count++], [
        i,
        j,
      ]);
      newButtonsMatr[i][j].getValue();
    }
  }
}
function isExist(i, j) {
  if (i >= 0 && j >= 0 && i < lines && j < lines) {
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
        if (isExist(i, j + 1)) {
          weightMatrix[i][j + 1]++;
        }
        if (isExist(i, j - 1)) {
          weightMatrix[i][j - 1]++;
        }
        if (isExist(i + 1, j + 1)) {
          weightMatrix[i + 1][j + 1]++;
        }
        if (isExist(i - 1, j - 1)) {
          weightMatrix[i - 1][j - 1]++;
        }
        if (isExist(i + 1, j - 1)) {
          weightMatrix[i + 1][j - 1]++;
        }
        if (isExist(i - 1, j + 1)) {
          weightMatrix[i - 1][j + 1]++;
        }
      }
    }
  }
}
export function openClosed(x, y) {
  if (maskMass[x][y] != 1) {
    if (
      isExist(x - 1, y) &&
      weightMatrix[x - 1][y] == 0 &&
      maskMass[x - 1][y] != 1
    ) {
      newButtonsMatr[x - 1][y].clickFunct(true);
    }
    if (
      isExist(x + 1, y) &&
      weightMatrix[x + 1][y] == 0 &&
      maskMass[x + 1][y] != 1
    ) {
      newButtonsMatr[x + 1][y].clickFunct(true);
    }
    if (
      isExist(x, y + 1) &&
      weightMatrix[x][y + 1] == 0 &&
      maskMass[x][y + 1] != 1
    ) {
      newButtonsMatr[x][y + 1].clickFunct(true);
    }
    if (
      isExist(x, y - 1) &&
      weightMatrix[x][y - 1] == 0 &&
      maskMass[x][y - 1] != 1
    ) {
      newButtonsMatr[x][y - 1].clickFunct(true);
    }
    if (
      isExist(x + 1, y + 1) &&
      weightMatrix[x + 1][y + 1] == 0 &&
      maskMass[x + 1][y + 1] != 1
    ) {
      newButtonsMatr[x + 1][y + 1].clickFunct(true);
    }
    if (
      isExist(x - 1, y - 1) &&
      weightMatrix[x - 1][y - 1] == 0 &&
      maskMass[x - 1][y - 1] != 1
    ) {
      newButtonsMatr[x - 1][y - 1].clickFunct(true);
    }
    if (
      isExist(x + 1, y - 1) &&
      weightMatrix[x + 1][y - 1] == 0 &&
      maskMass[x + 1][y - 1] != 1
    ) {
      newButtonsMatr[x + 1][y - 1].clickFunct(true);
    }
    if (
      isExist(x - 1, y + 1) &&
      weightMatrix[x - 1][y + 1] == 0 &&
      maskMass[x - 1][y + 1] != 1
    ) {
      newButtonsMatr[x - 1][y + 1].clickFunct(true);
    }
  }
}
export function addWeights() {
  for (let i = 0; i < newButtonsMatr.length; i++) {
    for (let j = 0; j < newButtonsMatr[i].length; j++) {
      maskMass[i][j] = newButtonsMatr[i][j].value;
    }
  }
  checker();
  for (let i = 0; i < newButtonsMatr.length; i++) {
    for (let j = 0; j < newButtonsMatr[i].length; j++) {
      newButtonsMatr[i][j].minesAround = weightMatrix[i][j];
    }
  }
}
export function gameEnded(matrix){
  let clickedButs = 0;
  let bombsCount = 0;
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      if(matrix[i][j].clicked == true){
        clickedButs++;
      }
      if(matrix[i][j].value == 1){
        bombsCount++;
      }
      if(matrix[i][j].clicked == true && matrix[i][j].value == 1){
        return false
      }
    }
  }
  if((matrix.length*matrix.length)-clickedButs == bombsCount){
    return true;
  }
  else{
    return undefined;
  }
}
export function buildEnd(boolean){
  let ends = ['You won', 'You losed']
  let place = document.getElementsByClassName("minerArea")[0];
  let element = document.createElement("input");
  element.type = 'button'
  element.className = 'finish'
  switch(boolean){
    case true:
      element.value = ends[0];
      element.style.background = 'rgb(107, 254, 134)';
      place.append(element);
      break;
    case false:
      element.value = ends[1];
      element.style.background = 'rgb(254, 136, 107)';
      place.append(element);
      break;
    case undefined:
      return console.log('not yet')
  }

}
addWeights();
