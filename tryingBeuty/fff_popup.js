const popup = document.getElementsByClassName('popup');
const btn_pop = document.getElementsByClassName('top');
const shawod_pop = document.getElementsByClassName('shadow_pop');
for(let i=0;i < btn_pop.length; i++){
    btn_pop[i].addEventListener('click', ()=>{
        open();
    })
}
function open(){
    popup[0].classList.add('pop_active');
    console.log('hell')
    shawod_pop[0].classList.add('shadow_pop_active');
};

document.getElementsByClassName('close_pop')[0].addEventListener('click', ()=>{
    close();
})



function close() {
    popup[0].classList.remove('pop_active');
    console.log('hell')
    shawod_pop[0].classList.remove('shadow_pop_active');
}