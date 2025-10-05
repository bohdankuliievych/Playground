export default function Column(parent, cards = []) {
  this.elements = {
    self: null,
    cards: cards,
  };
  this.parent = parent;
  this.dragTarget = null;

  this.render = (parent) => {
    this.elements.self = document.createElement("div");
    this.elements.self.classList.add("trello__column");
    this.elements.self.setAttribute("draggable", "true");
    this.elements.cards?.forEach((card) => card.render(this.elements.self));
    this.parent.append(this.elements.self);
  };
}
