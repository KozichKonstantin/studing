class User {
    constructor (username, password){
        this.username  = username;
        this.password = password;
    }
    validate() {
        if (this.password.length > 6) {
            return true;
        }else{
            if(this.password.length == 0){
                return 'error, no password';
            }
            return false;
        }
    }
}
