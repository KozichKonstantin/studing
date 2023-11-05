
import { getClicks, startSapper } from "./listeners.js";
export function startGame(){
    startSapper();
}
export function builder(number){
    let place = document.getElementsByClassName('minerArea')[0];
    let element  = document.createElement('div');
    element.className = 'miner';
    element.style.display = 'auto'
    element.style.gridTemplateColumns = `repeat(${number}, 50px)`;
    element.style.gridTemplateRows = `repeat(${number}, 50px)`;
    place.append(element);
    place = element;
    for(let i = 0; i < (number*number); i++){
        element = document.createElement('input');
        element.className = 'place';
        element.setAttribute('type', 'button');
        element.setAttribute('name', 'minerButtons');
        console.log(i)
        place.append(element)   
    }
    getClicks()
}