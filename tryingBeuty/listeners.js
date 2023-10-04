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
    console.log(coll.number)
    addCollumn(coll.weight, collumns.length);
    addDate(coll.date, collumns.length)
    objMass.push(coll);
    let stoper = 14;
    deleteOld(collumns.length, stoper);
    if(objMass.length == stoper){
        objMass=objMass.slice(1)
    }
    editAll(objMass);
})
document.getElementsByClassName('logo')[0].addEventListener('click', ()=>{
    console.log('navigation clicked')
    builder();
})