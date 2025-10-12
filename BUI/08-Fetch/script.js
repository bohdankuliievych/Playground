const imagesQtyField = document.querySelector(".form__field");
const triggerRequestBtn = document.querySelector(".form__submit");
const imagesContainer = document.querySelector(".wrapper");

async function fetchImage(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    return result.message;
  } catch (error) {
    console.error(error.message);
  }
}
function renderImage(url) {
  const currentImg = document.createElement("img");
  currentImg.setAttribute("src", url);
  currentImg.setAttribute("alt", "dog");
  imagesContainer.insertAdjacentElement("beforeend", currentImg);
}

window.addEventListener("load", () => {
  triggerRequestBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    let imagesQty = Number(imagesQtyField.value);
    if (!imagesQty) {
      throw new Error("Enter a number in a field");
    }
    while (imagesQty) {
      renderImage(await fetchImage("https://dog.ceo/api/breeds/image/random"));
      imagesQty--;
    }
  });
});
