function addCollumn (weight){
    const createdType = document.createElement('div');
    createdType.className = (`column`);
    createdType.setAttribute('name', `${weight}`);
    createdType.style.height = (`${weight}px`);
    try{document.getElementsByName('basic')[0].childNodes[1].append(createdType);}
    catch(error){
        console.log('empty childNodes')
    }
}
function addDate(date){
    const createdDate = document.createElement('p');
    createdDate.className = (`date`);
    createdDate.textContent = `${date}`;
    document.getElementsByClassName('datesContent')[0].append(createdDate);
}
function addWeight(weight){
    const collumns = document.getElementsByClassName('column');
    for(let i = 0; i < collumns.length; i++){
        collumns[i].textContent = weight[i];
    }
}
/* global */
function deleteOld (collumns, stoper){
    const allCollumns = document.querySelectorAll('.column');
    const allDates = document.querySelectorAll('.date');
    if (collumns == stoper){
        allCollumns[0].remove();
        allDates[0].remove();
    }
}
/** */
function getMax(arr){
    return( max = arr.reduce((max, value) => (value > max ? value : max), 0));
}
function editAll(objMass){
    try{let collumn = document.getElementsByClassName('column');
    for(let i = 0; i < objMass.length; i++){
        collumn[i].style.height = (`${objMass[i].getHight(getMax(objMass.map((col)=>col.weight)))}px`) 
    }}
    catch(error){
        console.log('no collumns')
    }
}
function returnErr(funcName){
    return new Error(`${funcName}`)
}
/**
 * 
 */
function builder(){
    let name  = document.getElementsByClassName('navigation')[0].getAttribute('name');
    name != 'added' ? buildNavigation() : deleteNavigation();
}

function buildNavigation(){
    let navigation = document.createElement('div');
    navigation.className = 'navCase';    
    document.getElementsByClassName('navigation')[0].append(navigation);
    document.getElementsByClassName('navigation')[0].setAttribute('name', 'added');
    for(let i = 0; i < 4; i++){
        navigation = document.createElement('div');
        navigation.className = 'button';
        document.getElementsByClassName('navCase')[0].append(navigation);
    }
}
function deleteNavigation(){
    document.getElementsByClassName('navigation')[0].setAttribute('name', 'deleted');
    function del(){
        document.getElementsByClassName('navCase')[0].remove();
    }
    setTimeout(del, 450);
}
/***
 * 
 * 
 */
function graphClass(action){
    let graph = document.getElementsByClassName('graph')[0];
    let classes = graph.classList;
    if(classes[1]==action){
        return 0;
    }
    console.log(classes.length);
    classes.length == 2 ? (graph.classList.remove(classes[1]), graph.setAttribute('name', 'basic')) : (graph.classList.add(action), graph.removeAttribute('name'), cleanCollumns())
}
function cleanCollumns(){
    let colls = document.querySelectorAll('.column');
    console.log(colls);
    for (let i = colls.length-1; i >= 0; i--){
        colls[i].remove();
    }
    return console.log('removed');
}