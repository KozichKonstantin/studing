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
// function openClosed(x,y){
//   for (let i =0; i < maskMass.length; i++){
//     for (let j = 0; j < maskMass[i].length; j++){
//       if(maskMass[i][j] !=1){
//         if (isExist(i - 1, j)) {
//           weightMatrix[i - 1][j]++;
//         }
//         if (isExist(i + 1, j)) {
//           weightMatrix[i + 1][j]++;
//         }
//         if (isExist(i, j + 1)) {
//           weightMatrix[i][j + 1]++;
//         }
//         if (isExist(i, j - 1)) {
//           weightMatrix[i][j - 1]++;
//         }
//         if (isExist(i + 1, j + 1)) {
//           weightMatrix[i + 1][j + 1]++;
//         }
//         if (isExist(i - 1, j - 1)) {
//           weightMatrix[i - 1][j - 1]++;
//         }
//         if (isExist(i + 1, j - 1)) {
//           weightMatrix[i + 1][j - 1]++;
//         }
//         if (isExist(i - 1, j + 1)) {
//           weightMatrix[i - 1][j + 1]++;
//         }
//       }
//     }
//   }
// }
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
addWeights();
