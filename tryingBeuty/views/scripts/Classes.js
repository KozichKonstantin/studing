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
        }
        weight<0 ? this._weight = -(weight): returnErr('setWeight');
        
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
    
}
class CollumnWithF extends Collumn{
    constructor (){
        super();
    }
    getHight(max){
        return (this.weight/max)*400
    }
    showAll(a='', b='', c=''){
        let answer = '';
        a=='number' ? answer+= 'number: ' + this.number+ ', ' : answer = answer;
        b=='weight' ? answer+= 'weight: ' + this.weight+ ', ' : answer = answer;
        c=='date' ? answer+= 'date: ' + this.date+ ', ' : answer = answer;
        (a==''&& b=='' && c=='') ? (answer= 'number: ' + this.number+ ', ' + 'weight: ' + this.weight+ ', ' + 'date: ' + this.date + ', ') : answer=answer
        return (answer.slice(0, -2))
    }
}