console.log(createTask(massOfTasks));
// let weights = [10, 20, 70, 80, 90, 100, 110, 160, 170, 180, 190, 200, 300]
// for(let i = 0; i < weights.length; i++){
let user = new UserParams(70, 180, 21)
user.GetIMT();
user.GetParams();
user.GetProgram();
console.log(user.params ,user.trainNum )
for(let i = 0; i < 3; i++){
    console.log(tasks[user.trainNum][0][i][0])
    createTaskCard(tasks[user.trainNum][0][i][0])
}
// }

