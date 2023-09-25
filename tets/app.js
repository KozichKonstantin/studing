class piatyB {
    constructor(dest, length){
        this.dest = dest;
        this.length =length;
    }
    print(){
        console.log(`${this.dest}, this ${this.length}`)
    }
}
const pedic =  new piatyB('Lalka, govnoed', 8);
pedic.print();