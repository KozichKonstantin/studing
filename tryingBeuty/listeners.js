let objMass = [];
document.getElementsByClassName('submit')[0].addEventListener('click', ()=>{
    let collumns = document.getElementsByClassName('column');
    let weight = document.getElementsByClassName('addWeight')[0].value;
    let date = document.getElementsByClassName('addDate')[0].value;
    let coll = new CollumnWithF()
    coll.weight = (weight-1+1);
    coll.date = date;
    coll.number = collumns.length++;
    addCollumn(coll.weight, collumns.length);
    objMass.push(coll);
    let stoper = 13;
    deleteOld(collumns.length, stoper);
    if(objMass.length == stoper){
        objMass=objMass.slice(1)
    }
    editAll(objMass);
})

