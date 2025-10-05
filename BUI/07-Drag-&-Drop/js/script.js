import Column from "./column.js";
import Card from "./card.js";

const form = document.querySelector(".form");
const headingText = document.querySelector(".form__field");
const colorSelect = document.querySelector(".form__select");
const submitBtn = document.querySelector(".form__submit");
const board = document.querySelector(".trello");
const addColBtn = document.querySelector(".trello__button");
const dragEvents = [
  "dragstart",
  "dragover",
  "dragenter",
  "dragleave",
  "dragend",
  "drop",
];
let columns = [];
let currentColumn = null;
// source drag element
let dragSrcEl = null;

function handleDrag(e) {
  const currentEl = e.target;

  switch (e.type) {
    case "dragstart":
      currentEl.style.opacity = "0.4";

      dragSrcEl = currentEl;
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/html", currentEl.innerHTML);

      if (currentEl.classList.contains("trello__card")) {
        e.dataTransfer.setData(
          "text/x-classnames",
          JSON.stringify(Array.from(currentEl.classList))
        );
      }
      break;

    case "dragend":
      currentEl.style.opacity = "1";
      board.querySelectorAll("*").forEach(function (item) {
        item.classList.remove("over");
      });
      break;

    case "dragover":
      e.preventDefault();
      // return false;
      break;

    case "dragenter":
      currentEl.classList.add("over");
      break;

    case "dragleave":
      currentEl.classList.remove("over");
      break;

    case "drop":
      e.stopPropagation();

      if (dragSrcEl !== currentEl) {
        // drop card into column
        if (
          dragSrcEl.classList.contains("trello__card") &&
          currentEl.classList.contains("trello__column")
        ) {
          currentEl.appendChild(dragSrcEl);
          currentEl.classList.remove("over");
          currentEl.querySelectorAll(":scope>div").forEach((el) => {
            el.style.opacity = 1;
          });
          return;
        }

        // drop column into column
        if (
          dragSrcEl.classList.contains("trello__column") &&
          currentEl.classList.contains("trello__column")
        ) {
          dragSrcEl.innerHTML = currentEl.innerHTML;
          currentEl.innerHTML = e.dataTransfer.getData("text/html");
        }

        // drop card into card
        if (
          dragSrcEl.classList.contains("trello__card") &&
          currentEl.classList.contains("trello__card")
        ) {
          let srcClassesArray = JSON.parse(
            e.dataTransfer.getData("text/x-classnames")
          );
          let currentElClasses = currentEl.classList;

          // change src classes
          dragSrcEl.classList.remove(...dragSrcEl.classList);
          currentElClasses.forEach((token) => {
            dragSrcEl.classList.add(token);
          });

          // change current classes
          currentEl.classList.remove(...currentEl.classList);
          srcClassesArray.forEach((token) => {
            currentEl.classList.add(token);
          });

          dragSrcEl.innerHTML = currentEl.innerHTML;
          currentEl.innerHTML = e.dataTransfer.getData("text/html");
        }

        // drop column into card
        if (
          dragSrcEl.classList.contains("trello__column") &&
          currentEl.classList.contains("trello__card")
        ) {
          return;
        }
      }
  }
}

window.addEventListener("DOMContentLoaded", () => {
	
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // first render
    if (columns.length === 0) {
      currentColumn = new Column(board);
      currentColumn.render(board);
      columns.push(currentColumn);
    } else {
      // if we have column
      currentColumn = columns[0];
    }
    const newCard = new Card(headingText.value, colorSelect.value);
    currentColumn.elements.cards.push(newCard);
    newCard.render(currentColumn.elements.self);
  });

  addColBtn.addEventListener("click", () => {
    const newColumn = new Column(board);
    columns.push(newColumn);
    newColumn.render(board);
  });

  dragEvents.forEach((e) => {
    board.addEventListener(e, handleDrag);
  });
});
