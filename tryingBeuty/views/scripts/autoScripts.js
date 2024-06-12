// const { json } = require("express");

console.log(createTask(massOfTasks));
let weights = [10, 20, 70, 80, 90, 100, 110, 160, 170, 180, 190, 200, 300]
// for(let i = 0; i < weights.length; i++){
let user = new UserParams(70, 180, 21)
user.GetIMT();
user.GetParams();
user.GetProgram();
console.log(user.params ,user.trainNum )
function parceAll(jsonString){
    let mass = [];
    jsonString = JSON.parse(jsonString);
    for(let i = 0; i < jsonString.length; i++){
        mass.push(JSON.parse(jsonString[i]));
        console.log(mass)
    }
    return mass;
}
function stringifyALL(massOfObj){
    let mass = [];
    for(let i = 0; i < massOfObj.length; i++){
        mass.push(JSON.stringify(massOfObj[i]))
    }
    return JSON.stringify(mass)
}
// let testMass = [ {text: '1', name: 2}, {text: '1', name: 2}, {text: '1', name: 2} ]
// console.log(JSON.parse(localStorage.getItem('user')).weightBase, 'user')
for(let i = 0; i < 3; i++){
    // console.log(tasks[user.trainNum][0][i][0])
    createTaskCard(tasks[user.trainNum][0][i][0])
}
if(localStorage.getItem('user') != undefined){
    document.getElementsByClassName('sex')[0].value = 'Loged In'
    let user = JSON.parse(localStorage.getItem('user'));
    document.getElementById('Username').textContent = user.username;
    document.getElementById('tall').value = user.tall;
    document.getElementById('Age').value = user.Age;

    // objMass = JSON.parse(user.weightBase)
    let elem = JSON.parse(user.weightBase);
    // console.log('weightBase saved', elem);
    // console.log(elem.length, 'lenght')
    
    for(let i = 0; i < elem.length; i++){
        // console.log('worked')
        let collumns = document.getElementsByClassName('column');
        buildCollumn(elem[i]._weight, 'zzzzz'+elem[i]._date, collumns)
    }
    
}else{
    document.getElementsByClassName('sex')[0].value = 'Not Loged In'
}
