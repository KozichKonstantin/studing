const popup = document.getElementsByClassName('popup');
const btn_pop = document.getElementsByClassName('top');
const shadow_pop = document.getElementsByClassName('shadow_pop');
for(let i=0;i < btn_pop.length; i++){
    btn_pop[i].addEventListener('click', ()=>{
        open();
    })
}
function open(){
    popup[0].classList.add('pop_active');
    shadow_pop[0].classList.add('shadow_pop_active');
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
};

document.getElementsByClassName('close_pop')[0].addEventListener('click', ()=>{
    close();
});
shadow_pop[0].addEventListener('click', ()=>{
    close();
    console.log('hell')
})






function close() {
    popup[0].classList.remove('pop_active');
    shadow_pop[0].classList.remove('shadow_pop_active');
    document.getElementsByTagName('body')[0].style.removeProperty('overflow');
}

