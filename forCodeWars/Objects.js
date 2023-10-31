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
    if (this.command == "") {
      this.out = "no commands sended";
    } else {
      if (this.commandObj.action == "cs") {
        try {
          comandLine.style.color = this.commandObj.value;
        } catch (error) {
          this.out = "incorrect color:" + this.commandObj.value;
        }
      } else {
        if (this.commandObj.action == "bg" ) {
            comandLine.style.backgroundColor = this.commandObj.value
        }
        // else{
        // if(this.commandObj.action == 'cl'){
        //     comandLine.value = '/#/';
        //     this.out = this.commandObj.action
        //     console.log(comandLine.value)
        // }
        else{
            this.out = "incorrect command:" + this.command;
        }
        // }
      }
    }
  }
}
