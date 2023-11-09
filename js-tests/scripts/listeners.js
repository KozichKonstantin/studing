import { allElems } from "../objects.js"
document.getElementsByClassName('buttonRec')[0].addEventListener('click', ()=>{
    allElems.recombine()
})