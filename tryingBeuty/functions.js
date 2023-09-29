function addCollumn (weight, collumns){
    const collumnHight = weight;
    const createdType = document.createElement('div');
    createdType.className = (`column col${collumns +1}`);
    createdType.style.height = (`${collumnHight-(-editHight(weight))}px`);
    return document.getElementsByClassName('graph')[0].append(createdType)
}
// как-то так тут есть баг если вводить много колонок и если вводить в инпут e
function deleteOld (collumns){
    console.log(collumns);
    const allCollumns = document.querySelectorAll('.column');
    if (collumns == 13){
        console.log('got it')
        allCollumns[0].remove();
    }
}
function editHight(weight){
        if ((weight>0)&&(weight<40)){
            return 200
        }
        if ((weight>=40) && (weight <100)){
            return 150
        }
        if (weight>=100){
            return 50;
        }
        if (weight>400){
            return (400 - weight);
        }
}