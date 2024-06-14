let currentUser = localStorage.getItem('user')
async function getWeight(url = "", data = {}) {
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
    let timer = setTimeout(chkUser(), 10)
    timer
  }
if(currentUser != undefined){
    // console.log('loaded+++++++=') 
    currentUser = JSON.parse(localStorage.getItem('user')).username;
    getWeight("/getWeight", {username: currentUser});
}else{
    console.log('-+-+- not logged in -+-+-');
}
