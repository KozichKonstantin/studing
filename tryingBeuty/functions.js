function addCollumn (weight, collumns){
    const collumnHight = weight;
    const createdType = document.createElement('div');
    createdType.className = (`column col${collumns +1}`);
    createdType.setAttribute('name', `${weight}`);
    editAppend(collumns, weight);
    if(collumns>0){
        createdType.style.height = (`${collumnHight-(-editHight(getMaxHight(collumns, weight)))}px`)
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
        getMaxHight(collumns);
        

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
        if ((weight>=100)&&(weight < 400)){
            console.log('+50')
            return 50;
        }
        if (weight >= 400){
            console.log(400 - weight)
            return (400 - weight);
        }
}
function editAppend (collumns, next){
    for(let i = 0; i < collumns; i++){
        let allCollumns = document.getElementsByClassName('column');
        let colHight = allCollumns[i].getAttribute('name');
        allCollumns[i].style.height = (`${colHight - (-editHight(getMaxHight(collumns, next)))}px`)
    }
}
function getMaxHight (collumns, next){
    let allHights = [];
    let maxHight = 0;
    let allCollumns = document.getElementsByClassName('column');
    for (let i =0; i < collumns; i++){
        allHights.push(allCollumns[i].getAttribute('name'));
    }
    allHights.push(next);
    console.log (allHights)
    for(let i =0; i < allHights.length; i++){
        console.log(maxHight, '>', allHights[i-1])
        if (maxHight < allHights[i]){
            maxHight = allHights[i];
            
        } 
    }
    return maxHight
}