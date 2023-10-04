function addCollumn (weight, collumns){
    const createdType = document.createElement('div');
    console.log(collumns)
    createdType.className = (`column`);
    createdType.setAttribute('name', `${weight}`);
    createdType.style.height = (`${weight}px`)
    document.getElementsByClassName('collumsContent')[0].append(createdType)
    
}
function addDate(date, collumns){
    console.log(collumns, ' addDate col');
    const createdDate = document.createElement('p');
    createdDate.className = (`date`);
    createdDate.textContent = `${date}`;
    document.getElementsByClassName('datesContent')[0].append(createdDate)
}
/* global */
function deleteOld (collumns, stoper){
    const allCollumns = document.querySelectorAll('.column');
    const allDates = document.querySelectorAll('.date');
    if (collumns == stoper){
        console.log(allCollumns[0].classList)
        allCollumns[0].remove();
        allDates[0].remove();
    }
}
/** */
function getMax(arr){
    function compareNumbers(a, b){
        return a-b;
    }
    arr.sort(compareNumbers);
    return arr[arr.length-1];
}
function editAll(objMass){
    let collumn = document.getElementsByClassName('column');
    for(let i = 0; i < objMass.length; i++){
        collumn[i].style.height = (`${objMass[i].getHight(getMax(objMass.map((col)=>col.weight)))}px`) 
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

