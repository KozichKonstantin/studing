function changeObj(val , newText){
    sonObj[`${val}`] = newText;
    console.log(newText);
}
function printInfo(){
    console.log(sonObj);
    return (sonObj.printPrev() + ',' + sonObj.print());
}
