import { Graph, GraphElement, SortedGraph, VisualStructure } from "./Classes.js";
const newGrahp = new Graph([]);
function circuitColors(iterator) {
  const colors = [
    "rgb(31, 119, 119)",
    "rgb(31, 72, 119)",
    "rgb(35, 31, 119)",
    "rgb(81, 31, 119)",
    "rgb(118, 31, 119)",
    "rgb(119, 31, 72)",
    "rgb(119, 31, 31)",
    "rgb(119, 109, 31)",
    "rgb(72, 119, 31)",
    "rgb(31, 119, 66)",
  ];
  if (iterator > colors.length - 1) {
    iterator = iterator - Math.trunc(iterator / colors.length) * colors.length;
  }
  return colors[iterator];
}
function appendElement(
  type,
  place,
  elemClass = "",
  name = "",
  value = "",
  ret = 0
) {
  let element = document.createElement(type);
  let appendPlace = document.getElementsByClassName(place)[0];
  element.className = elemClass;
  if (name != "") {
    element.setAttribute("name", name);
  }
  if (value != "") {
    element.value = value;
  }
  if ((ret == 0)) {
    appendPlace.append(element);
  }
  return element;
}
export function createElement(cost, connections, name) {
  let color = circuitColors(newGrahp.elements.length);
  connections = connections.split(", ");
  let lines = [];
  if(connections[0] != ''){
    let linesPlace = appendElement("div", "graph", `linesBlock ${name}` );
    for (let i = 0; i < connections.length; i++) {
    lines.push(appendElement("hr", linesPlace.classList, "hrLine"));
  }
  }
  
  let element = appendElement("div", "graph", `graphElement ${name}`);

  let newElement = new GraphElement(element, cost, connections, name, color);
  newElement.getColor(color);

  newGrahp.addElement(newElement);
  let place = element.classList;
  element = appendElement("div", place, `elementName ${name}`);
  element.textContent = name;
  element.style.backgroundColor = "white";
  let connectedElements = newGrahp.getConnections(newElement);
  place = appendElement("div", place, `connections ${name}`);
  for (let i = 0; i < connectedElements.length; i++) {
    console.log(place.classList);
    let connectPoint = appendElement("div", place.className, "connectPoint");
    connectPoint.style.backgroundColor = connectedElements[i].color;
    lines[i].style.backgroundColor = connectedElements[i].color;
  }
}
let visual = new VisualStructure
export function sortGraph(){
  for(let i = 0; i < newGrahp.elements.length; i++){
    visual.addElement(newGrahp.elements[i])
  }
  console.log(visual.sort(visual.structure()))
  return visual.sort(visual.structure())
}
export function getSortedGraph (place){
  let sortedGraph = new SortedGraph(sortGraph())
  sortedGraph.appendElements(place);
  
}