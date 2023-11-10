export class Game {
  constructor(play, additionals = [], variable = 0) {
    this.play = play;
    this.additionals = additionals;
    this.variable = variable;
  }
  startGame() {
    console.log('mainClass startGame()')
    this.play.addScripts();
    this.play.createField(this.variable);
    this.play.findButtons();
  }
  closeGame() {
    console.log('mainClass closeGame()')
    this.play.destroyGame();
  }
  retryGame() {
    console.log('mainClass retryGame()')
    this.closeGame(), this.startGame();
  }
}
