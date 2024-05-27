function stringifyALL(massOfObj){
    let mass = [];
    for(let i = 0; i < massOfObj.length; i++){
        mass.push(JSON.stringify(massOfObj[i]))
    }
    return JSON.stringify(mass)
}

async function saveWeight(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
  }
  let obj = new Object();
  document.getElementsByName('save')[0].addEventListener("click", () => {
    // console.log("clicked save", stringifyALL(objMass));
    console.log(parceAll(stringifyALL(objMass)), 'returned')
    obj.username = JSON.parse(localStorage.getItem('user')).username;
    weights = stringifyALL(objMass); 
    // console.log(obj, 'obj');
    saveWeight("/saveWeight", [obj, weights]);
  });
  