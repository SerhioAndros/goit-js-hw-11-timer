class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      dateInput: document.querySelector("#dateInput"),
      timeInput: document.querySelector("#timeInput"),
      startBtn: document.querySelector("#startBtn"),
      timer: document.querySelector(selector),
    };
    this.intervalId = null;
  }

  render(days, hours, mins, secs) {
    this.refs.timer.querySelector("[data-value='days']").textContent = days;
    this.refs.timer.querySelector("[data-value='hours']").textContent = String(
      hours
    ).padStart(2, 0);
    this.refs.timer.querySelector("[data-value='mins']").textContent = String(
      mins
    ).padStart(2, 0);
    this.refs.timer.querySelector("[data-value='secs']").textContent = String(
      secs
    ).padStart(2, 0);
  }

  startCountdown() {
    if (this.intervalId) {
      return;
    }

    const currentDate = new Date();
    const targetDateUnix = Date.parse(
      this.refs.dateInput.value + " " + this.refs.timeInput.value
    );
    const currentDateUnix = Date.now(currentDate);
    let timeLeft = +targetDateUnix - +currentDateUnix;
    this.intervalId = setInterval(() => {
      timeLeft -= 1000;
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((timeLeft % (1000 * 60)) / 1000);
      this.render(days, hours, mins, secs);
      if (timeLeft <= 0) {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.render("0", "00", "00", "00");
      }
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2021"),
});

startBtn.addEventListener("click", timer.startCountdown.bind(timer));

// const this.padDate = (num) => String(num).padStart(2, 0);

// const refs = {
//   dateInput: document.querySelector("#dateInput"),
//   timeInput: document.querySelector("#timeInput"),
//   startBtn: document.querySelector("#startBtn"),
//   timer: document.querySelector(".timer"),
// };

// let intervalId;
// const currentDate = new Date();

// const startCountdown = (e) => {
//     if (intervalId) { return };

//     const currentDate = new Date();
//     const targetDateUnix = Date.parse(refs.dateInput.value + " " + refs.timeInput.value)
//     const currentDateUnix = Date.now(currentDate);
//     let timeLeft = +targetDateUnix - +currentDateUnix;
//     intervalId = setInterval(() => {
//         timeLeft -= 1000;
//         const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//         const secs = Math.floor((timeLeft % (1000 * 60)) / 1000);
//         refs.timer.querySelector("[data-value='days']").textContent = days;
//         refs.timer.querySelector("[data-value='hours']").textContent = hours;
//         refs.timer.querySelector("[data-value='mins']").textContent = mins;
//         refs.timer.querySelector("[data-value='secs']").textContent = secs
//     }, 1000)
// };

// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);
