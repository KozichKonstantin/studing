export class ElementsArray {
  constructor(array) {
    this.array = array;
  }
  recombine() {
    let arry = []
    for(let i = 0; i <  this.array.length; i++){
        arry.push(this.array[i].color)
    }
    let newArr = [];
    while (arry.length > 0) {
      let elemId = Math.floor(Math.random() * arry.length);
      newArr.push(arry[elemId]);
      arry.splice(elemId, 1);
    }
    for(let i = 0; i < newArr.length; i++){
        this.array[i].position.style.backgroundColor = newArr[i]
    }
    return newArr
  }
}
export class Element {
  constructor(position, color) {
    this.position = position;
    this.color = color;
  }
}