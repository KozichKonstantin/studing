function stringifyALL(massOfObj){
    let mass = [];
    for(let i = 0; i < massOfObj.length; i++){
        mass.push(JSON.stringify(massOfObj[i]));
    }
    mass = JSON.stringify(mass);
    return mass.replace('\\','');
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
  document.getElementsByName('saveweight')[0].addEventListener("click", () => {
    obj.username = JSON.parse(localStorage.getItem('user')).username;
    weights = stringifyALL(objMass);
    saveWeight("/saveWeight", [obj, weights.replace(/\\/g, '')]);
  });
  