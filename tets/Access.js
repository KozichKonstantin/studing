class Access extends User{
    constructor(username, password, allow){
        super (username, password);
        this.allow = allow;
    }
    showAll(){
        return ( this.allow + ' ' + this.username + ' ' + this.password);
    }
}