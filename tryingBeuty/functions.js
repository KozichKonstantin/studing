function addCollumn (weight, collumns){
    const createdType = document.createElement('div');
    createdType.className = (`column col${collumns +1}`);
    createdType.setAttribute('name', `${weight}`);
    createdType.style.height = (`${weight}px`)
    document.getElementsByClassName('collumsContent')[0].append(createdType)
    
}
// function editHight(weight, collumns){
//     if(getMaxHight(collumns, weight)>0){
//         let koef = (weight)/(getMaxHight(collumns, weight))  
//         return koef
//     }else{
//         return 1;
//     }
//    }
// function getMaxHight (collumns, next){
//     let collMassive = [];
//     let collumn = document.getElementsByClassName('column');
//     function compareNumbers(a, b){
//         return a-b;
//     }
//     for( let i =0; i < collumns; i++){
//         collMassive.push(collumn[i].getAttribute('name'))
//     }
//     if (next != undefined){
//         collMassive.push(next);
//     }
//     collMassive.sort(compareNumbers);
//     return collMassive[collMassive.length-1];
// }
function addDate(date, collumns){
    const createdDate = document.createElement('p');
    createdDate.className = (`date col${collumns+1}`);
    createdDate.textContent = `${date}`;
    document.getElementsByClassName('datesContent')[0].append(createdDate)
}
/* global */

// function editAppend(collumns){
//     let collumn = document.getElementsByClassName('column');
//     for(let i =0; i < collumns; i++){
//         let thisHight= collumn[i].getAttribute('name');
//         collumn[i].style.height = (`${400 * editHight(thisHight, collumns)}px`);
//     }
// }
function deleteOld (collumns, stoper){
    const allCollumns = document.querySelectorAll('.column');
    if (collumns == stoper){
        allCollumns[0].remove();
        // getMaxHight(collumns);
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