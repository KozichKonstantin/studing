import { spinWords } from "./functions.js";
import { toLower } from "./functions.js";
import { Sapper } from "./sapper/objects.js";
export class Input {
  constructor() {}
  set value(value) {
    this._value = value.trim().toUpperCase();
  }
  get value() {
    if (this.validate() == true) {
      return this._value;
    } else {
      console.error("something wrong");
    }
  }
  validate() {
    if (typeof this._value == "string") {
      return true;
    } else {
      return false;
    }
  }
}
export class Output {
  constructor(input, command = false) {
    (this.input = input), (this.command = command);
  }
  set functionName(name) {
    if (name != "") {
      this._functionName = name;
    } else {
      this._functionName = "default";
    }
  }
  get functionName() {
    return this._functionName;
  }
  checkComm() {
    for (let i = 1; i < this.input.length; i++) {
      if (this.input[i - 1] + this.input[i] == "/@") {
        this.command = true;
      }
    }
    return this.command;
  }
  standOut() {
    if (this.functionName == "ctrlC") {
      return {
        from: this.functionName,
        out: spinWords(this.input),
      };
    } else {
      if (this.functionName == "toLower") {
        return {
          from: this.functionName,
          out: toLower(this.input),
        };
      } else {
        return {
          from: this.functionName,
          out: this.input,
        };
      }
    }
  }
  getOutput() {
    if (this.checkComm()) {
      let c_U = new ConsoleUtility();
      c_U.command = this.input;
      c_U.checkout();
      return {
        from: "console utility",
        out: c_U.out,
      };
    } else {
      return this.standOut();
    }
  }
}
export class ConsoleUtility {
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
    this.commandObj.gameSet = mass[2];
  }
  checkout() {
    this.concat();
    let comandLine = document.getElementsByClassName("txt")[0];
    switch (this.command) {
      case "":
        this.out = "no commands sended";
        break;
      default:
        switch (this.commandObj.action) {
          case "cs":
            comandLine.style.color = this.commandObj.value;
            this.out = `text color = ${this.commandObj.value}`;
            break;
          case "bg":
            comandLine.style.backgroundColor = this.commandObj.value;
            this.out = `background color = ${this.commandObj.value}`;
            break;
          case "cl":
            this.out = `/@cl`;
            break;
          case "gm":
            this.out = 'gameSettings'
            if (this.commandObj.value == 'sapper') {
              Sapper.variable = this.commandObj.gameSet;
            }
            break;
          default:
            this.out = `incorrect command: ${this.command}`;
        }
        break;
    }
  }
} 
