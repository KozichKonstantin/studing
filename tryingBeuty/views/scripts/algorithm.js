const basicAge = 65;
const basicIMT = 22;
const lineDlAge = [-42, -30, -15, 0, 15, 20, 30];
const lineDlIMT = [-21, -17, -12, 0, 8, 13, 18];
export class UserParams {
  constructor(weight, height, age) {
    this.weight = weight;
    this.height = height;
    this.age = age;
  }
  GetIMT() {
    let IMT = (this.weight / ((this.height / 100)*(this.height / 100)));
    this.IMT = IMT;
    return IMT;
  }
  GetParams() {
    this.deltaIMT = this.IMT - basicIMT;
    this.deltaAge = this.age - basicAge;
    this.params = [this.deltaAge, this.deltaIMT];
    return this.params;
  }
  GetProgram(){
    let imtQ = 0;
    let ageQ = 0;
    for(let i = 6; i > 0; i --){
      if(this.params[0] >= lineDlAge[i]){
      }else{
        ageQ = i;
      }
    }
    for(let i = 6; i > 0; i --){
      if(this.params[1] >= lineDlIMT[i]){
      }else{
        imtQ = i-1;
      }
    }
    this.trainPlace = [ageQ, imtQ];
  }
}
