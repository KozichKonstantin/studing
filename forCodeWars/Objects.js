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
    constructor(functionName, input){
        this.functionName = functionName,
        this.input = input
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
