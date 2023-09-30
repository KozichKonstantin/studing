function addCollumn (weight, collumns){
    const collumnHight = weight;
    const createdType = document.createElement('div');
    createdType.className = (`column col${collumns +1}`);
    createdType.setAttribute('name', `${weight}`);
    if(collumns>0){
        let firstCollumn = document.getElementsByClassName('column')[0].getAttribute('name');
        createdType.style.height = (`${collumnHight-(-editHight(firstCollumn))}px`)
        // console.log(firstCollumn, 'firstcollumn');
    return document.getElementsByClassName('graph')[0].append(createdType)
    }else{
        let firstCollumn = weight;
        createdType.style.height = (`${collumnHight-(-editHight(firstCollumn))}px`);
        return document.getElementsByClassName('graph')[0].append(createdType)
    }
    
}
// как-то так тут есть баг если вводить много колонок и если вводить в инпут e
function deleteOld (collumns){
    console.log(collumns);
    const allCollumns = document.querySelectorAll('.column');
    if (collumns == 13){
        console.log('got it')
        allCollumns[0].remove();
        editAppend(collumns);
    }
}
function editHight(weight){
        if ((weight>0)&&(weight<40)){
            console.log('+200')
            return 200
        }
        if ((weight>=40) && (weight <100)){
            console.log('+150')
            return 150
        }
        if (weight>=100){
            console.log('+50')
            return 50;
        }
        if (weight>400){
            console.log('-x')
            return (400 - weight);
        }
}
function editAppend (collumns){
    for(let i = 0; i < collumns; i++){
        let allCollumns = document.getElementsByClassName('column');
        let colHight = allCollumns[i].getAttribute('name');
        let firstColHi = allCollumns[0].getAttribute('name');
        allCollumns[i].style.height = (`${colHight - (-editHight(firstColHi))}px`)
        
    }
}