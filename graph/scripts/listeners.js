import { createElement, getSortedGraph} from "./functions.js";
let action = '';
document.getElementsByClassName('buttonAdd')[0].addEventListener('click', ()=>{
    document.getElementsByClassName('modal')[0].style.display = 'flex';
    action = 'add'
})
document.getElementsByClassName('close')[0].addEventListener('click', ()=>{
    document.getElementsByClassName('modal')[0].style.display = 'none';
    action = ''
})
document.getElementsByClassName('submit')[0].addEventListener('click', ()=>{
    let form = document.getElementsByClassName('form')[0].children
    switch(action){
        case 'add':
          createElement(form[0].value, form[1].value, form[2].value)  
    }
})
document.getElementsByClassName('buttonSort')[0].addEventListener('click', ()=>{
    getSortedGraph(document.getElementsByClassName('graph')[0])
})