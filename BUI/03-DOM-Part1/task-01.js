function checkMoney() {
  const listItems = Array.from(document.getElementsByClassName("list__item"));
  console.log(listItems);

  const paintElement = (e) => {
    const val = e.querySelector(".list__value").textContent;
    console.log(val);
    const goal = e.querySelector(".list__goal-value").textContent;
    console.log(goal);

    e.style.color =
      val < 0.2 * goal
        ? "red"
        : val >= 0.2 * goal && val < 0.5 * goal
        ? "yellow"
        : val > 0.9 * goal
        ? "green"
        : "";
    console.log(e.style.color);
  };

  listItems.forEach((element) => paintElement(element));
}
