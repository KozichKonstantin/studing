function addCollumn (weight, collumns){
    const collumnHight = weight;
    const createdType = document.createElement('div');
    createdType.className = (`column col${collumns +1}`);
    createdType.setAttribute('name', `${weight}`);
    // editAppend(collumns, weight);
    console.log(collumnHight * editHight(weight, collumns))
    console.log('max', getMaxHight(collumns, weight))
    createdType.style.height = (`${getMaxHight(collumns, weight) * editHight(weight, collumns)}px`)
    return document.getElementsByClassName('graph')[0].append(createdType)
}
function editAppend (collumns, next){
    for(let i = 0; i < collumns; i++){
        let allCollumns = document.getElementsByClassName('column');
        let colHight = allCollumns[i].getAttribute('name');
        allCollumns[i].style.height = (`${colHight * editHight(collumns, next)}px`)
    }
}
function editHight(weight, collumns){
    if(getMaxHight(collumns)>0){
        let koef = (weight)/(getMaxHight(collumns, weight))  
        console.log(weight, getMaxHight(collumns, weight), 'stab') 
        console.log('koef:', koef)
        return koef
    }else{
        return 1;
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
        // console.log(maxHight, '~', allHights[i])
        if (maxHight < allHights[i]){
            console.log(maxHight, '<', allHights[i])
            maxHight = allHights[i];
            console.log (maxHight)
        } 
    }
    return maxHight
}
function deleteOld (collumns){
    // console.log(collumns);
    const allCollumns = document.querySelectorAll('.column');
    if (collumns == 13){
        // console.log('got it')
        allCollumns[0].remove();
        getMaxHight(collumns);
        

    }
}