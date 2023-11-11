import { Graph, GraphElement } from "./Classes.js";
const newGrahp = new Graph([])
function circuitColors(iterator){
    const colors = [
        'rgb(31, 119, 119)',
        'rgb(31, 72, 119)',
        'rgb(35, 31, 119)',
        'rgb(81, 31, 119)',
        'rgb(118, 31, 119)',
        'rgb(119, 31, 72)',
        'rgb(119, 31, 31)',
        'rgb(119, 109, 31)',
        'rgb(72, 119, 31)',
        'rgb(31, 119, 66)'
    ]
    if(iterator > colors.length-1){
        iterator  = iterator - (Math.trunc(iterator / colors.length))*colors.length
    }
    return colors[iterator]
}
export function createElement(cost, connections, name){
    let color = circuitColors(newGrahp.elements.length)
    connections = connections.split(', ')
    let place = document.getElementsByClassName('graph')[0];
    let element = document.createElement('div')
    element.className = `graphElement ${name}`;
    let newElement = new GraphElement(element, cost, connections, name, color);
    newElement.getColor(color);
    newGrahp.addElement(newElement);
    place.append(element);
    place = element;
    element = document.createElement('div');
    element.textContent = name;
    element.style.backgroundColor = 'white';
    let connectedElements = newGrahp.getConnections(newElement);
    place.append(element);
    element = document.createElement('div');
    element.className = 'connections';
    place.append(element);
    place = element;
    for(let i = 0; i < connectedElements.length; i++){
        let connectPoint = document.createElement('div');
        connectPoint.className = 'connectPoint';
        connectPoint.style.backgroundColor = connectedElements[i].color;
        place.append(connectPoint);
        console.log(connectedElements[i].color);
    }
}