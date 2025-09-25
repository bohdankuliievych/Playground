const keyboard = document.querySelector(".keyboard");
const title = document.querySelector(".title");
const allKeys = Array.from(document.querySelectorAll("li"));

function compareToReg(regExp, array) {
  return array.find((key) => key.innerText.match(regExp));
}

function processKey(key) {
  key.classList.toggle("hit");
  title.innerText = title.textContent.concat("", key.innerText);
}
function addKeyToTitle(key) {
  title.innerText = title.textContent.concat("", key.innerText);
}

document.addEventListener("keydown", (e) => {
  // e.preventDefault();
  let reg;
  // letter keys
  if (e.code.match(/^Key[A-Z]$/)) {
    reg = new RegExp(`^${e.key}$`, "i");
    const key = compareToReg(reg, allKeys);
    processKey(key);
    return;
  }
  // special character keys (need escape sequences)
  if (e.key.match(/[\];',./\\[]/)) {
    const terminatedArray = ["[", "]", "\\", "."];
    if (terminatedArray.includes(`${e.key}`)) {
      reg = new RegExp(`^\\${e.key}$`, "");
    } else {
      reg = new RegExp(`^${e.key}$`);
    }
    const key = compareToReg(reg, allKeys);
    processKey(key);
    return;
  }
  // not letter and not special
  if (e.key.length > 2) {
    // shift keys
    if (e.key === "Shift") {
      if (e.code === "ShiftLeft") {
        reg = new RegExp("left", "i");
      }
      if (e.code === "ShiftRight") {
        reg = new RegExp("right", "i");
      }
      const key = allKeys.find((key) => key.dataset.value?.match(reg));
      processKey(key);
      return;
    }
    // other keys
    try {
      const key = allKeys.find((key) =>
        e.key.toLowerCase().includes(key.dataset.value)
      );
      processKey(key);
    } catch (error) {
      console.log(error);
    }
  }
});

// delete 'hit' class
document.addEventListener("keyup", () => {
  allKeys.forEach((key) => key.classList.remove("hit"));
});
