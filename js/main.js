/**
 * Elements
 */

const startBtn = document.querySelector('.btn-start');
const stopBtn = document.querySelector('.btn-stop');
const settingBtn = document.querySelector('.btn-setting');
const minuteInput = document.querySelector('.minute-input');
const secondInput = document.querySelector('.second-input');
const ring = document.querySelector('.ring');

/**
 * Variables
 */

let timeIntervalId;
let isEditTimer = false;

/**
 * Event Listeners
 */

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
settingBtn.addEventListener('click', editTimer);

/**
 * Functions
 */

function startTimer() {
  startBtn.classList.add('hide');
  stopBtn.classList.remove('hide');
  ring.classList.add('start');

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
      startBtn.classList.remove('hide');
      stopBtn.classList.add('hide');
      ring.classList.remove('start');

      // clear interval
      clearInterval(timeIntervalId);
      timeIntervalId = null;
    }

    // add leading zero for 0-9
    secondInput.value = ('0' + seconds).slice(-2);
  }, 1000);
}

function stopTimer() {
  startBtn.classList.remove('hide');
  stopBtn.classList.add('hide');
  ring.classList.remove('start');

  // stop timer
  clearInterval(timeIntervalId);
  timeIntervalId = null;
}

function editTimer() {
  // prevent edit when timer has started
  if (startBtn.classList.contains('hide')) {
    return;
  }

  isEditTimer = !isEditTimer;
  if (isEditTimer) {
    minuteInput.disabled = false;
    secondInput.disabled = false;
  } else {
    minuteInput.disabled = true;
    secondInput.disabled = true;
  }
}
