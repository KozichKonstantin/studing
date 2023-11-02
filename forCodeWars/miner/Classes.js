export class MinerButton{
    constructor(place, value){
        this.place = place,
        this.value = value,
        this.minesAround = 0,
        this.clicked = false
    }
    getValue(){
        let random = Math.floor(Math.random() * 8)
        if(random < 1){
            this.value =1;
        }
    }
}