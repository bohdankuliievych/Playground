import API from "./API";

const loginBtn = document.getElementById("loginBtn");

loginBtn?.addEventListener("click", async (e) => {
  e.preventDefault();
  const nameVal = document.getElementById("userName").value;
  console.log(nameVal);
  const passwordVal = document.getElementById("userPassword").value;
  console.log(passwordVal);
  const user = await API.getUser(nameVal, passwordVal);
  console.log(user);
});
