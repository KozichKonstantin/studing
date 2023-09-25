const methodsProt ={
    'printPrev' : function(){
        return(Object.values(this.__proto__))
    },
    'print': function(){
        return(Object.values(this))
    }
}
const objProt = {
    __proto__: methodsProt,
    'id': '52',
    'class': 'barbarian',
    'specs': [1, 2, 3, 4, 5, 6],
    'img':  '/1'
}
const sonObj = {
    __proto__: objProt,
    'name' : 'azalot',
    'age' : '12'
}