
export function DraggableItem(content, parentList) {
  this.content = content;

  this.parentList = parentList;
  this.self = document.createElement("div");
  this.self.classList.add("box");
  this.self.setAttribute("draggable", "true");

  this.render = () => {
    this.self.innerHTML = this.content;
    this.parentList.elements.self.append(this.self);
  };
}

/**
 *
 * @param {Array} itemsContent
 */
export function DraggableList(itemsContent) {
  this.items = itemsContent.map((content) => new DraggableItem(content, this));
  this.dragTarget = null;

  this.elements = {
    self: document.createElement("div"),
  };

  this.render = (parent, items = this.items) => {
    this.elements.self.classList.add("draggable-list");
    this.items.forEach((item) => item.render());

    this.elements.self.addEventListener("dragstart", this.handleDrag);
    this.elements.self.addEventListener("dragover", this.handleDrag);
    this.elements.self.addEventListener("dragenter", this.handleDrag);
    this.elements.self.addEventListener("dragleave", this.handleDrag);
    this.elements.self.addEventListener("dragend", this.handleDrag);
    this.elements.self.addEventListener("drop", this.handleDrag);

    parent.append(this.elements.self);
  };

  //  method for drag&drop
  this.handleDrag = function (e) {
    if (!e.target.classList.contains("box")) {
      // console.log("not box");
      return;
    }

    const allElements = e.currentTarget.querySelectorAll(":scope > div");
    const currentEl = e.target;

    switch (e.type) {
      case "dragstart":
        currentEl.style.opacity = "0.4";

        dragSrcEl = currentEl;

        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", currentEl.innerHTML);

        break;
      case "dragend":
        currentEl.style.opacity = "1";

        allElements.forEach(function (item) {
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
  };
}

// const testList = new DraggableList(["Item-01", "Item-02", "Item-03"]);
// testList.render(document.body);
