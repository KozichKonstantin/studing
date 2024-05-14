let weight;
let height;
let age;
const basicAge = 65;
const basicIMT = 22;
export class UserParams {
  constructor(weight, height, age, params) {
    this.weight = weight;
    this.height = height;
    this.age = age;
    this.params = params;
  }
  GetIMT(weight, height) {
    let IMT = (this.weight / (this.height / 100)) ^ 2;
    this.IMT = IMT;
    return IMT;
  }
  GetParams() {
    let deltaIMT = this.IMT - basicIMT;
    let deltaAge = this.age - basicAge;
    this.params = [deltaAge, deltaIMT];
    console.log(this.params);
    return this.params;
  }
}
let user1 = new UserParams(90, 180, 22, [1, 1]);
user1.GetIMT();
user1.GetParams();
