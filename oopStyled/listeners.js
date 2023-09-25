document.getElementsByClassName('sendInfo')[0].addEventListener('click', ()=>{
    changeObj('name' , document.getElementsByClassName('name')[0].value);
    changeObj('age' , document.getElementsByClassName('age')[0].value);
    createOutput(printInfo());
 })