let objMass = [];
document.getElementsByClassName('submit')[0].addEventListener('click', ()=>{
    let collumns = document.getElementsByClassName('column');
    let weight = document.getElementsByClassName('addWeight')[0].value;
    if (weight==0){
        return console.error('cant add collumn')
    }
    let date = document.getElementsByClassName('addDate')[0].value;
    let coll = new CollumnWithF()
    coll.weight = (weight-1+1);
    coll.date = date;
    coll.number = collumns.length++;
    addCollumn(coll.weight);
    addDate(coll.date)
    objMass.push(coll);
    addWeight(objMass.slice(-14).map((obj)=>obj.weight))
    let stoper = 14;
    deleteOld(collumns.length, stoper);
    if(objMass.length == stoper){
        objMass=objMass.slice(1)
    }
    editAll(objMass);
})
document.getElementsByClassName('logo')[0].addEventListener('click', ()=>{
    builder();
})