document.getElementsByClassName('submit')[0].addEventListener('click', ()=>{
    let collumns = document.getElementsByClassName('column').length;
    let weight = document.getElementsByClassName('addWeight')[0].value;
    let date = document.getElementsByClassName('addDate')[0].value;
    let stoper = 13;
    addCollumn(weight, collumns);
    addDate(date, collumns);
    deleteOld(collumns, stoper);
    collumns = document.getElementsByClassName('column').length;
    editAppend(collumns)
    
})