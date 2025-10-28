import API from "./API";
import { Storage, cleanPage } from "./utils";
import renderWalletsPage from "./renderWalletsPage";

if (Storage.getItem("user")) {
  const loginBtn = document.getElementById("loginBtn");

  loginBtn?.addEventListener("click", async (e) => {
    e.preventDefault();
    const nameVal = document.getElementById("userName").value;
    const passwordVal = document.getElementById("userPassword").value;
    const user = await API.getUser(nameVal, passwordVal);

    if (user.length > 0) {
      Storage.setItem("user", user[0]);
      cleanPage();
      renderWalletsPage();
    } else {
      e.target.parentElement.reset();
      throw new Error("Such user cannot be found.");
    }
  });
} else {
  cleanPage();
  renderWalletsPage();
}
