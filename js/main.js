/**
 * Elements
 */

const startBtn = document.querySelector('.btn-start');
const stopBtn = document.querySelector('.btn-stop');
const minuteInput = document.querySelector('.minute-input');
const secondInput = document.querySelector('.second-input');

/**
 * Variables
 */

let timeIntervalId;

/**
 * Event Listeners
 */

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);

/**
 * Functions
 */

function startTimer() {
  startBtn.classList.toggle('hide');
  stopBtn.classList.toggle('hide');

  // start the timer
  timeIntervalId = setInterval(function () {
    let minutes = parseInt(minuteInput.value);
    let seconds = parseInt(secondInput.value);

    if (minutes >= 0 && seconds > 0) {
      seconds -= 1;
    } else if (minutes > 0 && seconds === 0) {
      seconds = 59;
      // add leading zero for 0-9
      minuteInput.value = ('0' + (minutes - 1)).slice(-2);
    } else {
      // clear interval
      clearInterval(timeIntervalId);
      timeIntervalId = null;
    }

    // add leading zero for 0-9
    secondInput.value = ('0' + seconds).slice(-2);
  }, 1000);
}

function stopTimer() {
  startBtn.classList.toggle('hide');
  stopBtn.classList.toggle('hide');

  clearInterval(timeIntervalId);
  timeIntervalId = null;
}
