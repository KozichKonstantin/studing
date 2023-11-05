export const lines = 4;
function builder(lines){
    let place = document.getElementsByClassName('miner')[0];
    let element  = document.createElement('div');
    element.className = 'miner';
    place.append(element);
    place = element;
    element = document.createElement('input');
    element.className = 'place';
    element.setAttribute('type', 'button');
    element.setAttribute('name', 'minerButtons');
    for(let i = 0; i < 16; i++){
        console.log(i)
        place.append(element)   
    }
}
builder(lines)