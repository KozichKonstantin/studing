import { Game } from "./mainClass.js";
export const sapperGame = {
  controls: [],
  createField(number) {
    let place = document.getElementsByClassName("minerArea")[0];
    let element = document.createElement("div");
    element.className = "miner";
    element.style.display = "auto";
    element.style.gridTemplateColumns = `repeat(${number}, 50px)`;
    element.style.gridTemplateRows = `repeat(${number}, 50px)`;
    place.append(element);
    place = element;
    for (let i = 0; i < number * number; i++) {
      element = document.createElement("input");
      element.className = "place";
      element.setAttribute("type", "button");
      element.setAttribute("name", "minerButtons");
      place.append(element);
    }
  },
  findButtons() {
    this.controls = document.getElementsByName("minerButtons");
  },
  addScripts() {
    let place = document.getElementsByClassName("additional")[0];
    let element = document.createElement("div");
    element.className = "scripts";
    place.append(element);
    place = document.getElementsByClassName("scripts")[0];
    let sapperDocs = [
      document.createElement("script"), 
      document.createElement("script"),
      document.createElement("script"),
    ];
    let waysMass = [
      "./sapper/Classes.js",
      "./sapper/functions.js",
      "./sapper/listeners.js",
    ];
    for (let i = 0; i < sapperDocs.length; i++) {
      sapperDocs[i].src = waysMass[i];
      sapperDocs[i].type = "module";
      sapperDocs[i].className = "addedScript";
      place.append(sapperDocs[i]);
    }
  },
  destroyGame() {
    this.controls = [];
    document.getElementsByClassName("scripts")[0].remove();
    document.getElementsByClassName("miner")[0].remove();
  },
};
export const Sapper = new Game(sapperGame, 0, 4);
