const timerTriggerButton = document.querySelector(".setTimer__submit");
const formTimerField = document.querySelector(".setTimer__field");
const allTimerValues = document.querySelectorAll(".timer__value");

function startTimer(eventDate) {
	debugger
  const [days, months, years] = eventDate.split("-");
  const isoDateString = `${years}-${months}-${days}`;
  const dDay = new Date(isoDateString).getTime();

  let x = setTimeout(function tick() {
    const now = Date.now();
    const delay = dDay - now;

    if (delay < 0) {
      clearTimeout(x);
    }

    const day = Math.floor(delay / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (delay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minute = Math.floor((delay % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((delay % (1000 * 60)) / 1000);
    console.log(day, hours, minute, second);

    allTimerValues.forEach((val) => {
      const dataType = val.dataset.timer;
      switch (dataType) {
        case "day":
          val.textContent = day.toString();
          break;
        case "hours":
          val.textContent = hours.toString();
          break;
        case "minute":
          val.textContent = minute.toString();
          break;
        case "second":
          val.textContent = second.toString();
          break;
      }
    });
    x = setTimeout(tick, 1000);
  }, 1000);
}

timerTriggerButton.addEventListener("click", () => {
  timerTriggerButton.disabled = true;
  const eventDate = formTimerField.value;
  if (eventDate && eventDate.match(/^(\d{2}-\d{2}-\d{4})$/)) {
    startTimer(eventDate);
  } else {
    alert("enter a valid date string");
    timerTriggerButton.disabled = false;
  }
});
