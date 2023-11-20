export class Graph {
  constructor(elements) {
    this.elements = elements;
    this.lastElement = elements[elements.length - 1];
  }
  addElement(element) {
    this.elements.push(element);
    this.lastElement = element;
  }
  getConnections(element) {
    let connectedElements = [];
    let connections = element.connections;
    console.log(element);
    console.log(connections);
    for (let i = 0; i < this.elements.length; i++) {
      for (let j = 0; j < connections.length; j++) {
        if (this.elements[i].name == connections[j]) {
          connectedElements.push(this.elements[i]);
        }
      }
    }
    return connectedElements;
  }
  showIt() {
    return console.log(this.elements);
  }
  findWay(fromElement, toElement) {
    for (let i = 0; i < this.elements.length; i++) {
      if (this.elements[i].name == fromElement) {
        console.log(this.elements[i].position);
      }
    }
    for (let i = 0; i < this.elements.length; i++) {
      if (this.elements[i].name == toElement) {
        console.log(this.elements[i].position);
      }
    }
  }
}
export class GraphElement {
  constructor(position, cost, connections, name, color) {
    this.position = position;
    this.cost = cost;
    this.connections = connections;
    this.name = name;
    this.color = color;
  }
  getColor(color) {
    this.position.style.backgroundColor = color;
  }
  showIt() {
    console.log(this);
  }
}
export class VisualStructure {
  constructor() {
    this.elements = [];
  }
  addElement(newElement) {
    this.elements.push(newElement);
    return this.elements;
  }
  structure() {
    let mapped = [];
    let divs = this.elements.map((elem) => elem.position);
    console.log(this.elements);
    let conns = this.elements.map((elem) => elem.connections.length);
    for (let i = 0; i < this.elements.length; i++) {
      mapped.push([conns[i], divs[i]]);
    }
    return mapped;
  }
  sort(mapped) {
    function sortIt(mass) {
      let massOfLines = [];
      let empty = [];
      for (let i = 0; i < mass.length; i++) {
        if (massOfLines.includes(mass[i][0])) {
        } else {
          massOfLines.push(mass[i][0]);
        }
      }
      massOfLines = massOfLines.map((element) => (element = [element, []]));
      for (let i = 0; i < mass.length; i++) {
        for (let j = 0; j < massOfLines.length; j++) {
          if (massOfLines[j][0] == mass[i][0]) {
            massOfLines[j][1].push(mass[i][1]);
          }
        }
      }
      return massOfLines;
    }
    return sortIt(mapped);
  }
}
export class SortedGraph {
  constructor(lines) {
    this.lines = lines;
  }
  getElements() {
    let massOfElems = [];
    for (let i = 0; i < this.lines.length; i++) {
      for (let j = 0; j < this.lines[i].length; j++) {
        massOfElems.push(this.lines[i][j]);
      }
      return massOfElems;
    }
  }
  createLine(){
    let line =document.createElement('div')
    line.className ='graphLine'
    line.style.display = 'flex'
    return line
  }
  appendElements(place){
    console.log(this.lines)
    for(let i = 0 ; i < this.lines.length; i++){
        let line = this.createLine()
        
        for(let j =0 ; j < this.lines[i][1].length; j++){
            // console.log(this.lines[i][1][j])
            console.log(line)
            line.append(this.lines[i][1][j])
            console.log('sorting...')
        }
        document.getElementsByClassName('graph')[0].append(line)
    }
  }
}
