let currentUser = localStorage.getItem('user')
async function saveWeight(url = "", data = {}) {
    // console.log('asyc works')
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }); 
    const json = await response.json();
    localStorage.setItem('user', JSON.stringify(json));
  }
if(currentUser != undefined){
    // console.log('loaded+++++++=') 
    currentUser = JSON.parse(localStorage.getItem('user')).username;
    saveWeight("/getWeight", {username: currentUser});
}else{
    console.log('-+-+- not logged in -+-+-');
}
