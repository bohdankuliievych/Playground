function filterСlothes(color) {
  if (color === "") {
    return;
  }
  const items = document.querySelectorAll(".list__item");
  const itemsArray = Array.from(items);
  const found = itemsArray.find((item) => item.textContent.includes(color));

  if (!found) {
    const field = document.querySelector("form");
    const error = new Error("такого кольору немає в асортименті");
    const errorDiv = document.createElement("div");
    errorDiv.innerText = `${error.message}`;
    field.insertAdjacentElement("afterend", errorDiv);
    return;
  }

  items.forEach((item) => {
    const itemText = item.textContent;
    if (!itemText.includes(color)) {
      // item.remove();
      item.style.display = "none";
    }
  });
}
