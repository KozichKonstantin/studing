class User {
  constructor(username, password) {
    User.username = username;
    User.password = password;
  }
}
class Collumn {
  constructor() {}
  set date(date) {
    this._date = `${date}`.slice(5);
  }
  set weight(weight) {
    if (weight > 0) {
      this._weight = weight;
    }
    weight < 0 ? (this._weight = -weight) : returnErr("setWeight");
  }
  set number(number) {
    if (number >= 0) {
      this._number = number;
    } else {
      console.error("unexpected number");
    }
  }
  set IMT(IMT){
    if (IMT > 0) {
      this._IMT = IMT;
    }
    IMT < 0 ? (this._IMT = -IMT) : returnErr("setIMT");
  }
  get IMT(){
    let tall = JSON.parse(localStorage.getItem('user')).tall;
    this._IMT = this._weight / ((tall / 100) * (tall / 100))
    return this._IMT
  }
  get weight() {
    return this._weight;
  }
  get number() {
    return this._number;
  }
  get date() {
    return this._date;
  }
}
class CollumnWithF extends Collumn {
  constructor() {
    super();
  }
  getHight(max) {
    return (this.weight / max) * 400;
  }
  showAll(a = "", b = "", c = "") {
    let answer = "";
    a == "number"
      ? (answer += "number: " + this.number + ", ")
      : (answer = answer);
    b == "weight"
      ? (answer += "weight: " + this.weight + ", ")
      : (answer = answer);
    c == "date" ? (answer += "date: " + this.date + ", ") : (answer = answer);
    a == "" && b == "" && c == ""
      ? (answer =
          "number: " +
          this.number +
          ", " +
          "weight: " +
          this.weight +
          ", " +
          "date: " +
          this.date +
          ", ")
      : (answer = answer);
    return answer.slice(0, -2);
  }
}
