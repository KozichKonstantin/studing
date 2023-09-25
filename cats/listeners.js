function clicks (){
    for(let i =0; i< catsBase.length; i++){
        document.getElementsByClassName('cat')[i].addEventListener('click', ()=>{
            kittyCreate(i);
            clickListen(i);
        })
    }
}
