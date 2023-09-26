document.getElementsByClassName('submit')[0].addEventListener('click', ()=>{
    let collumns = document.getElementsByClassName('column').length
    let weight = document.getElementsByClassName('addWeight')[0].value
    addCollumn(weight, collumns);
})