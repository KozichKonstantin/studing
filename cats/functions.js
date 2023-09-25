function kittyCreate(i){
    let kitty = {
        __prototype__ : cat
    }
        kitty.name = catsBase[i][0];
        kitty.img = `${catsBase[i][1]}`,
        kitty.sound = new Audio(`${catsBase[i][2]}`)
        console.log(kitty)
    return kitty
}
function clickListen(num){
    kitty.sound;
}