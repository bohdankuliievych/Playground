export default function handleDrag(e) {
  debugger;
  const currentEl = e.target;

  if (currentEl.classList.contains("trello__column")) {
    console.log(currentEl);

    const allColumnElements = e.currentTarget.querySelectorAll(":scope > div");

    switch (e.type) {
      case "dragstart":
        // draggedColumn = currentEl;
        currentEl.style.opacity = "0.4";

        dragSrcEl = currentEl;
        e.dataTransfer.effectAllowed = "move";
        // e.dataTransfer.setData("text/html", currentEl.innerHTML);
        break;

      case "dragend":
        currentEl.style.opacity = "1";

        allColumnElements.forEach(function (item) {
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

  // if (e.target.classList.contains("trello__card")) {
  //   const allCardElements = e.currentTarget.querySelectorAll(".trello__card");

  //   switch (e.type) {
  //     case "dragstart":
  //       currentEl.style.opacity = "0.4";

  //       dragSrcEl = currentEl;

  //       e.dataTransfer.effectAllowed = "move";
  //       e.dataTransfer.setData("text/html", currentEl.innerHTML);

  //       break;
  //     case "dragend":
  //       currentEl.style.opacity = "1";

  //       allColumnElements.forEach(function (item) {
  //         item.classList.remove("over");
  //       });
  //       break;
  //     case "dragover":
  //       e.preventDefault();
  //       // return false;
  //       break;
  //     case "dragenter":
  //       currentEl.classList.add("over");

  //       break;
  //     case "dragleave":
  //       currentEl.classList.remove("over");

  //       break;
  //     case "drop":
  //       e.stopPropagation();

  //       if (dragSrcEl !== currentEl) {
  //         dragSrcEl.innerHTML = currentEl.innerHTML;
  //         currentEl.innerHTML = e.dataTransfer.getData("text/html");
  //       }
  //     // return false
  //   }
  // }
}
