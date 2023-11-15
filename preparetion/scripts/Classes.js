export class Graph {
    constructor (){
        this.elements = []
    }
    addElement(element){
        this.elements.push(element)
    }
}
export class GraphElement {
    constructor (htmlElement, coordinates, color){
        this.htmlElement = htmlElement;
        this.coordinates = coordinates;
        this.color = color;
    }
    returnAll(){
        console.log(this.htmlElement, this.coordinates, this.color)
    }
}