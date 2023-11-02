export class MinerButton{
    constructor(place, number){
        this.place = place,
        this.number = number,
        this.value = 0,
        this.minesAround = 0,
        this.clicked = false
    }
    getValue(){
        let random = Math.floor(Math.random() * 8)
        if(random < 1){
            this.value =1;
        }
    }
    getXY(line){
            let x = (this.number % line);
            let y = (this.number - x) / line
            this.XY = [x, y]
    }
}
export class LinkList{
    constructor(XY, object){
        this.XY  = XY,
        this.object = object
    }
}