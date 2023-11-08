class ElementsArray{
    constructor(array){
        this.array = array
    }
    recombine(){
        let numbersArr= []
        for(let i = 0; i < 16; i++){
            numbersArr.push(i) ;
        }
        let newArr = [];
        function add(arr){
            let rand = Math.floor(Math.random()*arr.length)
            arr.splice(rand-1, 1)
            return {elem: arr[rand], id: rand, shorter: arr }
        }
        for(let i = 0; i < numbersArr.length; i++){
            add(numbersArr)
        }
    }
}
class Element{
    constructor(position, color){
        this.position = position
        this.color = color
    }

}
let arr = []
for(let i =0 ; i < 16; i++){
    arr.push()
}
const elems =  new ElementsArray(arr)
elems.recombine()
