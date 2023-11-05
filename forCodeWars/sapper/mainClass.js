export class Game{
    constructor(play, additionals =[], variable= 0){
        this.play = play
        this.additionals = additionals
        this.variable = variable
    }
    startGame(){
        this.play.addScripts()
        this.play.createField(this.variable)
        this.play.findButtons()
    }
    closeGame(){
        this.play.destroyGame()
    }
    retryGame(){
        this.closeGame(),
        this.startGame()
    }
}