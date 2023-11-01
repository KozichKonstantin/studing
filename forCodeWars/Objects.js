const Incert = {
  __prototype__: Input,
  validate: function () {
    if (typeof this.value == "string") {
      return true;
    } else {
      return false;
    }
  },
  seeInside: function () {
    if (this.validate() == true) {
      return this._value;
    } else {
      console.error("something wrong");
    }
  },
};
class ConsoleUtility {
  constructor(command = "", out = "") {
    (this.command = command), (this.out = out);
    this.commandObj = {
      action: "",
      value: "",
    };
  }
  concat() {
    this.command = this.command.replace("/@", "");
    this.command = this.command.replace(":", "");
    let mass = this.command.split(" ");
    this.commandObj.action = mass[0];
    this.commandObj.value = mass[1];
  }
  checkout() {
    this.concat();
    let comandLine = document.getElementsByClassName("txt")[0];
    switch(this.command){
        case '': 
            this.out = "no commands sended";
            break;
        default:
            switch(this.commandObj.action){
                case 'cs':
                    comandLine.style.color = this.commandObj.value;
                    this.out = `text color = ${this.commandObj.value}`
                    break;
                case 'bg':
                    comandLine.style.backgroundColor = this.commandObj.value
                    this.out = `background color = ${this.commandObj.value}`
                    break;
                case 'cl':
                    // comandLine.value = (comandLine.textContent = '');
                    // comandLine.nodeValue
                    comandLine = document.querySelector('.txt')
                    comandLine.textContent = comandLine.textContent + '+++'
                    this.out = `console cleared`
                    console.log(typeof(comandLine.textContent), comandLine.value)
                    break;
                default:
                    this.out = `incorrect command: ${this.command}`
            }
            break;
    }
  }
}
