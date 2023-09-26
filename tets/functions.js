function check(){
    let inputs = document.getElementsByClassName("into");
    let name = inputs[0].value;
    let password = inputs[1].value;
    const person = new User(name, password);
    output(person.validate())
    // console.log( person.validate());
}
function settings (name, password, button){
    let choosed = button.value;
    let person = new Access(name, password, choosed);
    // console.log(person.allow);
    output(person.showAll())
}
