export default function Card(headingText, color) {
  this.headingText = headingText;
  this.color =
    color === "зелений"
      ? "green"
      : color === "жовтий"
      ? "yellow"
      : color === "червоний"
      ? "red"
      : "null";

  this.elements = {
    self: null,
  };
  this.render = (parent) => {
    this.elements.self = document.createElement("div");
    this.elements.self.textContent = `${headingText}`;
    this.elements.self.classList.add("trello__card");
    this.elements.self.setAttribute("draggable", "true");

    if (this.color) {
      this.elements.self.classList.add(`trello__card_${this.color}`);
    }

    parent.append(this.elements.self);
  };
}
