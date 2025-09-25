function renderList(list) {
  const listEl = document.createElement("ul");

  list.forEach((item) => {
    const elemTitle = document.createElement("h2");
    elemTitle.innerText = `${item.name}`;
    const elemPrice = document.createElement("p");
    elemPrice.innerText = `${item.price}`;
    const listItem = document.createElement("li");
    listItem.append(elemTitle, elemPrice);
    listEl.append(listItem);
  });

  document.body.append(listEl);
}