const rootEl = document.querySelector("#root_storage");
let pickedWares;
// local storage, array of objects
function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
// ---------------------------------------------
// find item in local storage
function findPicked(item) {
  return getLocalStorage("basket")?.find((el) => {
    return Number(item.getAttribute("id")) === el.id;
  });
}
// ---------------------------------------------
// wares item constructor
function WaresItem({ id, title, imgUrl, description, status }) {
  (this.id = id),
    (this.title = title),
    (this.imgUrl = imgUrl),
    (this.description = description),
    (this.status = status),
    (this.elements = {
      self: null,
    });

  this.render = function (parentEl) {
    pickedWares = getLocalStorage("basket") ? getLocalStorage("basket") : [];
    // self div
    this.elements.self = document.createElement("div");
    this.elements.self.setAttribute("id", `${this.id}`);
    this.elements.self.classList.add("wares__item");
    this.elements.self.classList.add(`wares__item--${this.status}`);
    // div > img
    const wareImg = document.createElement("img");
    wareImg.setAttribute("src", `${this.imgUrl}`);
    wareImg.setAttribute("alt", `${this.description}`);
    // button
    const waresItemButton = document.createElement("button");
    waresItemButton.classList.add("wares__button");
    waresItemButton.setAttribute("type", "button");
    waresItemButton.innerText = "Check item";

    this.elements.self.append(wareImg, waresItemButton);

    parentEl.append(this.elements.self);
  };
}
// ---------------------------------------------
function renderStorage(storage, parent = rootEl) {
  storage.forEach((item) => {
    const newWare = new WaresItem(item);
    newWare.render(parent);
  });
}
// ---------------------------------------------
window.addEventListener("load", (event) => {
  if (!getLocalStorage("basket")) {
    renderStorage(testArray, rootEl);
  } else {
    renderStorage(getLocalStorage("basket"), rootEl);
  }
});
// ---------------------------------------------
rootEl.addEventListener("click", (e) => {
  // debugger;
  e.preventDefault();
  if (e.target.matches("button.wares__button")) {
    const clickedWare = e.target.closest(".wares__item");
    console.log(clickedWare);
    const isInLocalStorage = findPicked(clickedWare);
    if (isInLocalStorage) {
      alert("Ware is already in the basket");
    } else {
      // debugger;
      // PROBLEM HERE
      const wareObject = testArray.find((el) => {
        return Number(clickedWare.getAttribute("id")) === el.id;
      });
      pickedWares.push(wareObject);
      setLocalStorage("basket", pickedWares);
    }
  }
});
