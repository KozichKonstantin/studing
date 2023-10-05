let objMass = [];
let allObjMass = [];
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
    allObjMass.push(coll); ///массив включающий в себя все колонки, даже не отображающиеся
    console.log(objMass.map((elem)=>elem.showAll('number','' ,'date')));
    objMass.length == 5 ? console.log(objMass) : console.log('Wait')
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



/***
 * 
 */
document.getElementsByClassName('left')[0].addEventListener('click', ()=>{
    const grafh = document.getElementsByClassName('graph')[0];
    graphClass('leftGr');
})
document.getElementsByClassName('right')[0].addEventListener('click', ()=>{
    const grafh = document.getElementsByClassName('graph')[0];
    graphClass('rightGr');
})