function createAllCardElements(type, place, createdClass, text=""){
    const createdType = document.createElement(type);
    return createdClass && createdType.classList.add(...createdClass.split(" ")), place.append(createdType), text && (createdType.textContent = text)
}
function buildSite(){
    for(let i =0; i < catsBase.length; i++){
        let grid = document.getElementsByClassName('grid')[0];
        createAllCardElements('div', grid , `catCard ${i}`);
        let card = document.getElementsByClassName(`catCard ${i}`)[0];
        createAllCardElements('div', card, 'cat')
        card  = document.getElementsByClassName(`cat`)[i];
        createAllCardElements('img', card, `img ${i}`);
        document.getElementsByClassName(`img ${i}`)[0].src = kittyCreate(i).img;
    }
}
