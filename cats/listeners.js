function clicks (){
    for(let i =0; i< catsBase.length; i++){
        document.getElementsByClassName('cat')[i].addEventListener('click', ()=>{
            // function soundStop(kitty){
            //     kittyCreate(i).sound.pause();
            // }
            if (kits.kat !=''){
                let stop = kits.kat.sound.pause();
                kits.kat = kittyCreate(i);
                let sound = kits.kat.sound.play();
                return sound ;
            }else{
                kits.kat = kittyCreate(i);
                let sound = kits.kat.sound.play();
                return sound;
            }
        })
    }
}
