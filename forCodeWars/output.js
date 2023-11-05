import { Output } from "./Classes.js";
import { Sapper } from "./sapper/objects.js";
import { getClicks, startSapper } from "./miner/listeners.js";
import { builder } from "./miner/setup.js";
let textarea = document.getElementsByClassName("txt")[0];

export function output(info, sourse) {
  let fullinf = new Output();
  fullinf.functionName = sourse;
  fullinf.input = info;
  console.log(fullinf.input)
  let content = textarea.value;
  if (fullinf.input == "/@cl") {
    content = "";
    fullinf.input = "";
  }
  if(fullinf.input == "/!sapper-start"){
    textarea.style.display = 'none'
    Sapper.startGame();
    console.log('started')
  }
  if(fullinf.input == "/!sapper-close"){ 
    Sapper.closeGame();
    textarea.style.display = 'block'
  }
  if(fullinf.input == "/!sapper-retry"){
    Sapper.retryGame();
  }
  fullinf.checkComm();
  if (sourse != null) {
    console.log(2);
    textarea.value =
      content +
      "content from: " +
      fullinf.getOutput().from +
      `\n` +
      fullinf.getOutput().out +
      `\n`;
  } else {
    textarea.value = content + `\n` + info;
  }

  textarea.scrollTop = textarea.scrollHeight;
}
