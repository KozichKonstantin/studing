function addCollumn (weight, collumns){
    const collumnHight = weight;
    const createdType = document.createElement('div');
    createdType.className = (`column col${collumns +1}`);
    createdType.style.height = (`${collumnHight}px`);
    return document.getElementsByClassName('graph')[0].append(createdType)
}
// как-то так тут есть баг если вводить много колонок и если вводить в инпут e
