document.getElementsByClassName('run')[0].addEventListener('click', ()=>{
    Incert.value = document.getElementsByClassName('incert')[0].value;
    output(spinWords(Incert.seeInside()))
})
