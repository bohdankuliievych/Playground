const rootEl = document.querySelector("#root_storage");

const testArray = [
  {
    id: 1,
    imgUrl:
      "https://zelenasadyba.com.ua/wp-content/uploads/2021/02/idealni-kimnatni-roslyny-04.jpg",
    title: "ficus",
    description:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit ",
  },
  {
    id: 2,
    imgUrl:
      "https://zelenasadyba.com.ua/wp-content/uploads/2021/02/idealni-kimnatni-roslyny-04.jpg",
    title: "qui esse",
    description:
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores ",
  },
  {
    id: 3,
    imgUrl:
      "https://zelenasadyba.com.ua/wp-content/uploads/2021/02/idealni-kimnatni-roslyny-04.jpg",
    title: "molestias",
    description:
      "et iusto sed quo iure\nvoluptatem occaecati porro eius odio et labore et velit aut",
  },
  {
    id: 4,
    imgUrl: "https://vazon.pp.ua/image/cache/catalog/News/bonsay-650x650.jpg",
    title: "occaecati",
    description:
      "ullam et saepe reiciendis voluptatem doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    id: 5,
    imgUrl:
      "https://zelenasadyba.com.ua/wp-content/uploads/2021/02/idealni-kimnatni-roslyny-04.jpg",
    title: "nesciunt",
    description:
      "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
  {
    id: 6,
    imgUrl:
      "https://na-dache.pro/uploads/posts/2021-05/1620532643_69-p-vazoni-dlya-tsvetov-iz-dereva-foto-77.jpg",
    title: "dolorem",
    description:
      "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis",
  },
  {
    id: 7,
    imgUrl:
      "https://zelenasadyba.com.ua/wp-content/uploads/2021/02/idealni-kimnatni-roslyny-04.jpg",
    title: "autem",
    description: "dolore placeat quibusdam ea quo vitaea sed quas",
  },
  {
    id: 8,
    imgUrl:
      "https://na-dache.pro/uploads/posts/2021-05/1620532643_69-p-vazoni-dlya-tsvetov-iz-dereva-foto-77.jpg",
    title: "dolorem",
    description: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam",
  },
  {
    id: 9,
    imgUrl:
      "https://zelenasadyba.com.ua/wp-content/uploads/2021/02/idealni-kimnatni-roslyny-04.jpg",
    title: "tempora",
    description: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam",
  },
  {
    id: 10,
    imgUrl: "https://vazon.pp.ua/image/cache/catalog/News/bonsay-650x650.jpg",
    title: "molestias",
    description:
      "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero",
  },
];

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
