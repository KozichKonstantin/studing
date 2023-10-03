let objMass = [];
document.getElementsByClassName('submit')[0].addEventListener('click', ()=>{
    let collumns = document.getElementsByClassName('column');
    let weight = document.getElementsByClassName('addWeight')[0].value;
    let date = document.getElementsByClassName('addDate')[0].value;
    let coll = new CollumnWithF()
    try{coll.weight = (weight-1+1);}
    catch (error){
        console.error('cant add Collumn')
    }
    coll.date = date;
    coll.number = collumns.length++;
    addCollumn(coll.weight, collumns.length);
    addDate(coll.date, collumns.length)
    objMass.push(coll);
    let stoper = 13;
    deleteOld(collumns.length, stoper);
    if(objMass.length == stoper){
        objMass=objMass.slice(1)
    }
    
    editAll(objMass);
})

