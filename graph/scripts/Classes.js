export class Graph{
    constructor(elements){
        this.elements =elements
        this.lastElement = elements[elements.length -1]
    }
    addElement(element){
        this.elements.push(element);
        this.lastElement = element
    }
    getConnections(element){
        let connectedElements = []
        let connections = element.connections;
        console.log(element)
        console.log(connections)
        for(let i = 0; i < this.elements.length; i++){
            for(let j = 0; j < connections.length; j++){
                if(this.elements[i].name == connections[j]){
                    connectedElements.push(this.elements[i])
                }
            }
        }
        return connectedElements;
    }
    showIt(){
        return console.log(this.elements)
    }
    findWay(fromElement ,toElement){
        for(let i = 0; i < this.elements.length; i++){
            if(this.elements[i].name == fromElement){
                console.log(this.elements[i].position)
            }
        }
        for(let i = 0; i < this.elements.length; i++){
            if(this.elements[i].name == toElement){
                console.log(this.elements[i].position)
            }
        }
    }
}
export class GraphElement{
    constructor(position, cost, connections, name, color){
        this.position = position;
        this.cost = cost;
        this.connections = connections;
        this.name = name;
        this.color = color;
    }
    getColor(color){
        this.position.style.backgroundColor = color; 
    }
    showIt(){
        console.log(this)
    }
}