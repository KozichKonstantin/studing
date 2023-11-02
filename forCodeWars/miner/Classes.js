export class MinerButton{
    constructor(place, value){
        this.place = place,
        this.value = value,
        this.minesAround = 0,
        this.clicked = false
    }
    getValue(){
        this.value = Math.floor(Math.random() * 2)
    }
}