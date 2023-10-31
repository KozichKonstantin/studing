const Incert = {
    __prototype__ : Input,
    validate: function(){
        if(typeof(this.value)== 'string' ){
            return true;
        }else{
            return false;
        }
    },
    seeInside: function(){
        if(this.validate() == true ){
            return this._value;
        }
        else{
            console.error('something wrong')
        }
    }
}
class Output  {
    constructor( input){
        this.input = input
    }
    set functionName(name){
        if(name != ''){
            this._functionName = name
        }else{
            this._functionName = 'default'
        }
    }
    get functionName(){
        return this._functionName
    }
    getOutput(){
        if(this.functionName == 'ctrlC'){
            return {
                from: this.functionName,
                out: spinWords(this.input)
            }
        }else{
            if(this.functionName == 'toLower'){
                return {
                    from: this.functionName,
                    out: toLower(this.input)
                }
            }
            else{
                return {
                    from: this.functionName,
                    out: this.input
                }
            }
        }
    }
}
