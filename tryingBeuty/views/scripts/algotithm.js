const basicAge = 65;
const basicIMT = 22;
const lineDlAge = [-42, -30, -15, 0, 15, 20, 30]
const lineDlIMT = [-21, -17, -12, 0, 8, 13, 18]
export class UserParams {
  constructor(weight, height, age, params) {
    this.weight = weight;
    this.height = height;
    this.age = age;
    this.params = params;
  }
  GetIMT() {
    let IMT = (this.weight / (this.height / 100)) ^ 2;
    this.IMT = IMT;
    return IMT;
  }
  GetParams() {
    this.deltaIMT = this.IMT - basicIMT;
    this.deltaAge = this.age - basicAge;
    this.params = [this.deltaAge, this.deltaIMT];
    console.log(this.params);
    return this.params;
  }
  GetProgram(){
    let imtQ = 0;
    let ageQ = 0;
    for(let i = 0; i <= 7; i++){
      if(this.params[0] >= lineDlAge[i]){
        i++
      }else{
        imtQ = i;
      }
    }
    for(i = 0; i<=7; i++){
      if(this.params[1] >= lineDlIMT[i]){
      }else{
        ageQ = i;
      }
    }
    let trainPlace = [ageQ, imtQ]
    return trainPlace;
  }
}
let user1 = new UserParams(90, 180, 22, [1, 1]);
user1.GetIMT();
user1.GetParams();
