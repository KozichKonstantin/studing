
// import { UserParams } from "./algorithm.js";
// import { addCollumn } from "./functions.js";
document.getElementsByClassName('submit')[0].addEventListener('click', ()=>{
    let collumns = document.getElementsByClassName('column');
    let weight = document.getElementsByClassName('addWeight')[0].value;
    if (weight==0){
        return console.error('cant add collumn');
    }
    let date = document.getElementsByClassName('addDate')[0].value;
    buildCollumn(weight, date, collumns)
    obj.username = JSON.parse(localStorage.getItem('user')).username;
    weights = stringifyALL(objMass);
    saveWeight("/saveWeight", [obj, weights.replace(/\\/g, '')]);
    delCanvas();
    try{buidGraf()}catch{Error}
    
})
document.getElementsByClassName('logo')[0].addEventListener('click', ()=>{
    // let user1 = new UserParams(60, 180, 75);
    // user1.GetIMT();
    // user1.GetParams();
    // user1.GetProgram();
    // console.log(user1);
    builder();
    
})

/***
 * 
 */

document.getElementsByClassName('left')[0].addEventListener('click', ()=>{
    grClass('leftGr');
    buidGraf();
    
})

document.getElementsByClassName('right')[0].addEventListener('click', ()=>{
    grClass('rightGr');
})
document.getElementsByClassName('calculate')[0].addEventListener('click', ()=>{
    if(localStorage.getItem('user') != undefined){
    // console.log(objMass);
        
        console.log(getMedium());
        let userInfo = JSON.parse(localStorage.getItem('user'));
        // console.log(userInfo)
        let user = new UserParams(getMedium(), userInfo.tall, userInfo.Age)
        user.GetIMT();
        user.GetParams();
        user.GetProgram();
        // console.log(user.params ,user.trainNum )
        for(let i = 0; i < 3; i++){
            deleteCard(i)
            // console.log(tasks[user.trainNum][0][i][0])
            createTaskCard(tasks[user.trainNum][0][i][0])
        }
        let btn_pop = document.getElementsByClassName("top");
    }
})
document.getElementsByClassName('')
let botmass = document.getElementsByClassName('taskText bot');
for(let i =0; i < 3; i++){
    botmass[i].addEventListener('mouseover', ()=>{
        botmass[i].classList.add('bot_active');
        botmass[i].value= '3000';
    }
    )
    botmass[i].addEventListener('mouseout', ()=>{
        botmass[i].classList.remove('bot_active');
        botmass[i].value= 'Exp';
    })
}
