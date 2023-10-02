class User {
    constructor (username, password){
        User.username = username
        User.password = password
    }
}
class Collumn {
    constructor (){
    }
    set date(date){
        this._date = `${date}`.slice(5);
    }
    set weight(weight){
        if(weight > 0){
            this._weight = weight;
        }else{
            return console.error('error, weight is not number')
        }
    }
    set number(number){
        if(number >=0){
            this._number = number;
        }else{
            console.error('unexpected number');
        }
    }
    get weight(){
        return this._weight;
    }
    get number(){
        return this._number;
    }
    get date(){
        return this._date;
    }
    showAll(){
        return (`${this.number}`+' '+`${this.weight}`+' '+`${this.date}`)
    }
}
class CollumnWithF extends Collumn{
    constructor (){
        super();
    }
    getHight(max){
        return (this.weight/max)*400
    }
}