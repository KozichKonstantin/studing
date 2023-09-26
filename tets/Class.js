class User {
    constructor (username, password){
        this.username  = username;
        this.password = password;
    }
    validate() {
        if (this.password > 6) {
            return true;
        }else{
            return false;
        }
    }
}
