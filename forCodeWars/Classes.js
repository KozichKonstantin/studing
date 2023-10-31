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
class Output  {
    constructor( input, command = false){
        this.input = input,
        this.command = command
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
    checkComm(){
        for(let i = 1; i < this.input.length; i++){
            if(this.input[i-1] + this.input[i] == '/@'){
                this.command = true
            }
        }
        return this.command
    }
    standOut(){
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
    getOutput(){
        if(this.checkComm()){
            let c_U = new ConsoleUtility;
            c_U.command = this.input
            c_U.checkout()
            return {
                from: 'console utility',
                out: c_U.out
            }
        }else{
            return this.standOut()
        }
    }
}