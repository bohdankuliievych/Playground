const htmlTag = document.querySelector("HTML");
htmlTag.style.cursor = "none";

const customCursor = document.querySelector(".root-cursor");
document.addEventListener("mousemove", (event) => {
  console.log(event);
  customCursor.style.left = event.x + "px";
  customCursor.style.top = event.y + "px";
});
