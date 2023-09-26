// document.getElementsByClassName('work')[0].addEventListener('click', ()=>{
//     check();
// })
let left = document.getElementsByClassName('left')[0];
let right = document.getElementsByClassName('right')[0];
left.addEventListener('click', ()=>{
    settings(document.getElementsByClassName('into')[0].value, document.getElementsByClassName('into')[1].value, left);
})
right.addEventListener('click', ()=>{
    settings(document.getElementsByClassName('into')[0].value, document.getElementsByClassName('into')[1].value, right);
})