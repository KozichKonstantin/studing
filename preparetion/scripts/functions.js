import { Graph, GraphElement } from "./Classes.js";
const colors = [
    'green', 
    'blue', 
    'red',
    'yellow',
    'black',
    'pink',
    'white'
  ]
  function addElemet(type, place, className, background){
    let element = document.createElement(type);
    element.className = className;
    element.style.backgroundColor = background;
    place.append(element);
    return element;
  }
  function createLine(fromElement, toElement){
    let line = document.createElement('hr');
    let place = document.getElementsByClassName('graph')[0];
    line.style.height = toElement.coordinates[1] - fromElement.coordinates[1];
    line.style.transform = `translateY(${(fromElement.coordinates[1] + toElement.coordinates[1])/2 -80}px)`;
    line.style.rotate = `${-((toElement.coordinates[0] - fromElement.coordinates[0])/(toElement.coordinates[1] - fromElement.coordinates[1]))*90}deg`;
    place.append(line)
  }
  const GraphObj = new Graph;
  let graphHtml = document.getElementsByClassName('graph')[0]
  for(let i = 0; i< colors.length; i++){
    let element = addElemet('div', graphHtml, 'graphElement', colors[i]);
    // element.style.marginLeft = `${-40 * i}px`
    let newElement = new GraphElement(element, [element.getBoundingClientRect().x, element.getBoundingClientRect().y], colors[i]);
    GraphObj.addElement(newElement);
  }
const testMass = [[3, 0],[1, 1],[1, 2],[2, 3],[3, 4],[3, 5]]
function sortIt(mass){
  let massOfLines =[]
  for(let i = 0 ; i < mass.length; i++){
    if (massOfLines.includes(mass[i][0])){

    }else{
      massOfLines.push(mass[i][0])
    }
  }
  massOfLines = massOfLines.map((element)=> element = [element , []])
  for(let i = 0; i < mass.length; i++){
    for (let j =0; j < massOfLines.length; j++){
      if(massOfLines[j][0] == mass[i][0]){
        massOfLines[j][1].push(mass[i][1]) 
      }
    }
  }
  return massOfLines
}
function resultIn(massOfLines){
  let out  = '';
  for(let i = 0; i < massOfLines.length; i++){ /// по этому кооличеству создавать линии
    for(let j = 0;  j < massOfLines[i][1].length; j++){ ///а по этому элементы
      out += massOfLines[i][1][j] + ' '
    }
    out += '\n'
  }
  return console.log(out)
}
console.log(sortIt(testMass))
resultIn(sortIt(testMass))
  console.log(GraphObj)
  createLine(GraphObj.elements[0], GraphObj.elements[1])
