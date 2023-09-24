function changeObj(val , newText){
    if((val == '' ) || (newText == '')){
        return console.error('empty field');
    }else{
    sonObj[`${val}`] = newText;
    }
}

function printInfo(){
    return (sonObj.printPrev() + ',' + sonObj.print());
}

function createOutput( text='' ){
    const createdType = document.createElement('textarea');
    return createdType.classList.add('output'), text && (createdType.textContent = text), document.getElementsByClassName('mainOut')[0].append(createdType)
}