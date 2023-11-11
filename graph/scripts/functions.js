import { Graph, GraphElement } from "./Classes.js";
const firstElement = new GraphElement(1, 5, [3,4], 1)
const secondElement = new GraphElement(2, 2, [1, 3], 4)
const newGrahp = new Graph([])
newGrahp.showIt();
newGrahp.findWay(1, 4)
export function createElement(cost, connections, name, color){
    connections = connections.split(', ')
    let place = document.getElementsByClassName('graph')[0];
    let element = document.createElement('div')
    element.className = `graphElement ${name}`;
    let newElement = new GraphElement(element, cost, connections, name, color)
    newElement.getColor(color)
    newGrahp.addElement(newElement)
    let connectedElements = newGrahp.getConnections(newElement)
    console.log(connectedElements)
    place.append(element)
    place = element;
    element = document.createElement('div')
    element.textContent = name;
    element.style.backgroundColor = 'white'
    place.append(element)
}