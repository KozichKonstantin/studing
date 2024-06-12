async function loginSave(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  // console.log('setting user', json)
  localStorage.setItem("user", JSON.stringify(json))
}
let obj = new Object();
document.querySelector(".subButton").addEventListener("click", () => {
  // console.log("clicked");
  obj.username = document.getElementsByName("username")[0].value;
  obj.password = document.getElementsByName("password")[0].value;
  // console.log(obj);
  loginSave("/login/saveLogin", obj);
});
