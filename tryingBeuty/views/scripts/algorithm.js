const basicAge = 65;
const basicIMT = 22;
const lineDlAge = [-42, -30, 15, 30];
const lineDlIMT = [-21, -12, 8, 18];
let tasks = [];
const massOfTasks = [
  [
    ["1.1", "1.1", "1.1", "TEXT 1"],
    ["1.2", "1.2", "1.2", "TEXT 1"],
    ["1.3", "1.3", "1.3", "TEXT 1"],
  ],
  [
    ["2.1", "2.1", "2.1", "TEXT 2"],
    ["2.2", "2.2", "2.2", "TEXT 2"],
    ["2.3", "2.3", "2.3", "TEXT 2"],
  ],
  [
    ["3.1", "3.1", "3.1","TEXT 3" ],
    ["3.2", "3.2", "3.2","TEXT 3" ],
    ["3.3", "3.3", "3.3","TEXT 3" ],
  ],
  [
    ["4.1", "4.1", "4.1" ,"TEXT 4"],
    ["4.2", "4.2", "4.2" ,"TEXT 4"],
    ["4.3", "4.3", "4.3" ,"TEXT 4"],
  ],
  [
    ["5.1", "5.1", "5.1","TEXT 5"],
    ["5.2", "5.2", "5.2","TEXT 5"],
    ["5.3", "5.3", "5.3","TEXT 5"],
  ],
  [
    ["6.1", "6.1", "6.1","TEXT 6"],
    ["6.2", "6.2", "6.2","TEXT 6"],
    ["6.3", "6.3", "6.3","TEXT 6"],
  ],
  [
    ["7.1", "7.1", "7.1", "TEXT 7" ],
    ["7.2", "7.2", "7.2", "TEXT 7" ],
    ["7.3", "7.3", "7.3", "TEXT 7" ],
  ],
  [
    ["8.1", "8.1", "8.1", "TEXT 8" ],
    ["8.2", "8.2", "8.2", "TEXT 8" ],
    ["8.3", "8.3", "8.3", "TEXT 8" ],
  ],
  [
    ["9.1", "9.1", "9.1", "TEXT 9" ],
    ["9.2", "9.2", "9.2", "TEXT 9" ],
    ["9.3", "9.3", "9.3", "TEXT 9" ],
  ],
  [
    ["10.1", "10.1", "10.1", "TEXT 10" ],
    ["10.2", "10.2", "10.2", "TEXT 10" ],
    ["10.3", "10.3", "10.3", "TEXT 10" ],
  ],
  [
    ["11.1", "11.1", "11.1", "TEXT 11" ],
    ["11.2", "11.2", "11.2", "TEXT 11" ],
    ["11.3", "11.3", "11.3", "TEXT 11" ],
  ],
  [
    ["12.1", "12.1", "12.1", "TEXT 12" ],
    ["12.2", "12.2", "12.2", "TEXT 12" ],
    ["12.3", "12.3", "12.3", "TEXT 12" ],
  ],
  [
    ["13.1", "13.1", "13.1", "TEXT 13" ],
    ["13.2", "13.2", "13.2", "TEXT 13" ],
    ["13.3", "13.3", "13.3", "TEXT 13" ],
  ],
  [
    ["14.1", "14.1", "14.1", "TEXT 14" ],
    ["14.2", "14.2", "14.2", "TEXT 14" ],
    ["14.3", "14.3", "14.3", "TEXT 14" ],
  ],
  [
    ["15.1", "15.1", "15.1", "TEXT 15" ],
    ["15.2", "15.2", "15.2", "TEXT 15" ],
    ["15.3", "15.3", "15.3", "TEXT 15" ],
  ],
  [
    ["16.1", "16.1", "16.1", "TEXT 16" ],
    ["16.2", "16.2", "16.2", "TEXT 16" ],
    ["16.3", "16.3", "16.3", "TEXT 16" ],
  ]
];

class UserParams {
  constructor(weight, height, age) {
    this.weight = weight;
    this.height = height;
    this.age = age;
  }
  GetIMT() {
    let IMT = this.weight / ((this.height / 100) * (this.height / 100));
    this.IMT = IMT;
    return IMT;
  }
  GetParams() {
    this.deltaIMT = this.IMT - basicIMT;
    this.deltaAge = this.age - basicAge;
    this.params = [this.deltaAge, this.deltaIMT];
    return this.params;
  }
  GetProgram() {
    let imtQ = 0;
    let ageQ = 0;
    for (let i = 4; i > 0; i--) {
      if (this.params[0] >= lineDlAge[i]) {
      } else {
        ageQ = i;
      }
    }
    for (let i = 4; i > 0; i--) {
      if (this.params[1] >= lineDlIMT[i]) {
      } else {
        imtQ = i;
      }
    }
    this.trainNum = imtQ -1 + (ageQ -1) * 4;
  }
}
class Card {
  constructor(number, program, place) {
    this.number = number;
    this.program = program;
    this.place = place;
    this.tasks = [];
  }
  getTasks(task) {
    this.tasks.push(task);
  }
  showTasks(number) {
    for (let i = 0; i < number && i < this.tasks.length; i++) {
      return this.tasks[i];
    }
  }
  deleteTask(number) {
    let newMass = [];
    for (let i = 0; i < this.tasks.length; i++) {
      if (i != number) {
        newMass.push(this.tasks[i]);
      }
    }
    this.tasks = newMass;
  }
}
class Task {
  constructor(name, text, xp, number, description) {
    this.name = name;
    this.text = text;
    this.xp = xp;
    this.number = number;
    this.description = description;
  }
}
function createTask(mass) {
  for (let i = 0; i < mass.length; i++) {
    let program = [];
    for(let j = 0; j < 3; j++){
      let createdTask = new Task(mass[i][j][0], mass[i][j][1], mass[i][j][2], j, mass[i][j][3]);
      program.push([createdTask, i]);
    }
    tasks.push([program, i])
  }
  return tasks;
}
