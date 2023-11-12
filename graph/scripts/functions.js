import { Graph, GraphElement } from "./Classes.js";
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
function appendElement(type, place, elemClass = "", name = "", value = "") {
  let element = document.createElement(type);
  let appendPlace = document.getElementsByClassName(place)[0];
  element.className = elemClass;
  if (name != "") {
    element.setAttribute("name", name);
  }
  if (value != "") {
    element.value = value;
  }
  appendPlace.append(element);
  return element;
}
export function createElement(cost, connections, name) {
  let color = circuitColors(newGrahp.elements.length);
  connections = connections.split(", ");
  let element = appendElement('div', 'graph', `graphElement ${name}`)
  let newElement = new GraphElement(element, cost, connections, name, color);
  newElement.getColor(color);
  newGrahp.addElement(newElement);
  let place = element.classList;
  element = appendElement('div', place, `elementName ${name}`)
  element.textContent = name;
  element.style.backgroundColor = "white";
  let connectedElements = newGrahp.getConnections(newElement);
  place = appendElement('div', place, `connections ${name}`)
  for (let i = 0; i < connectedElements.length; i++) {
    console.log(place.classList)
    let connectPoint = appendElement('div', place.className, 'connectPoint')
    connectPoint.style.backgroundColor = connectedElements[i].color;
  }
}
