import { lines } from "./setup.js";
export class MinerButton{
    constructor(place, number){
        this.place = place,
        this.number = number,
        this.value = 0,
        this.minesAround = 0,
        this.clicked = false
        this.i = (this.number[0]*lines+this.number[1])
    }
    getValue(){
        let random = Math.floor(Math.random() * 8)
        if(random < 1){
            this.value =1;
        }
    }
    clickFunct(boolean){
        this.clicked = boolean;
        this.getStyle()
    }
    getStyle(){
        if(this.clicked){
            if(this.value == 1){
                this.place.style.background = 'red'
            }else{
                this.place.style.background = 'black';
                this.place.value = this.minesAround
            }
        }
    }
}