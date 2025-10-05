function handleDrag(e) {
  if (!e.target.classList.contains("box")) {
    // console.log("not box");
    return;
  }
  const currentEl = e.target;
  switch (e.type) {
    case "dragstart":
      currentEl.style.opacity = "0.4";

      dragSrcEl = currentEl;
      // console.log(dragSrcEl);

      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/html", currentEl.innerHTML);
      // console.dir(e.dataTransfer.getData("text/html"));

      break;
    case "dragend":
      currentEl.style.opacity = "1";

      items.forEach(function (item) {
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
        dragSrcEl.innerHTML = currentEl.innerHTML;
        currentEl.innerHTML = e.dataTransfer.getData("text/html");
      }
    // return false
  }
}

let dragSrcEl = null;

let dragContainer = document.querySelector(".container");
const items = dragContainer.querySelectorAll("*");

dragContainer.addEventListener("dragstart", handleDrag);
dragContainer.addEventListener("dragover", handleDrag);
dragContainer.addEventListener("dragenter", handleDrag);
dragContainer.addEventListener("dragleave", handleDrag);
dragContainer.addEventListener("dragend", handleDrag);
dragContainer.addEventListener("drop", handleDrag);
