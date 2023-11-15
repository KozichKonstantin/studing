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
    let element = document.createElement(type)
    element.className = className;
    element.style.backgroundColor = background 
    place.append(element)
    return element
  }
  let coordinates= []
  function createLine(fromElement, toElement){
    let line = document.createElement('hr')
    let place = document.getElementsByClassName('graph')[0]
    line.style.height = toElement.coordinates[1] - fromElement.coordinates[1]
    line.style.transform = `translateY(${(fromElement.coordinates[1] + toElement.coordinates[1])/2 -80}px)`
    place.append(line)
  }
  const GraphObj = new Graph;
  let graphHtml = document.getElementsByClassName('graph')[0]
  for(let i = 0; i< colors.length; i++){
    let element = addElemet('div', graphHtml, 'graphElement', colors[i])
    let newElement = new GraphElement(element, [element.getBoundingClientRect().x, element.getBoundingClientRect().y], colors[i])
    GraphObj.addElement(newElement);
  }
  console.log(GraphObj)
  createLine(GraphObj.elements[0], GraphObj.elements[1])