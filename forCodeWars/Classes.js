class Input {
    constructor(){
        // this._value = value;
    }
    set value(value){
        this._value = value.trim().toUpperCase()
    }
    get value(){
        if(this.validate() == true ){
            return this._value;
        }
        else{
            console.error('something wrong')
        }
    }
    validate(){
        if(typeof(this._value)== 'string' ){
            return true;
        }else{
            return false;
        }
    }

}