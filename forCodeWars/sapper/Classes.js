export class MinerButton {
  constructor(place, number, lines) {
    (this.place = place),
      (this.number = number),
      (this.value = 0),
      (this.minesAround = 0),
      (this.clicked = false);
  }
  getValue() {
    console.log("miner getValue");
    let random = Math.floor(Math.random() * 8);
    if (random < 1) {
      this.value = 1;
    }
  }
  clickFunct(boolean) {
    console.log("miner clickFunct");
    this.clicked = boolean;
    this.getStyle();
  }
  getStyle() {
    console.log("miner getStyle()");
    if (this.clicked) {
      if (this.value == 1) {
        this.place.style.background = "red";
      } else {
        this.place.style.background = "black";
        this.place.value = this.minesAround;
      }
    }
  }
}
