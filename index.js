const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let intervalId
let leftSeconds
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  leftSeconds -= 1
  renderTime(leftSeconds)
  if (leftSeconds == 0) clearInterval(intervalId)
};

const animateTimer = () => {
  intervalId = setInterval(createTimerAnimator, 1000)
}

function renderTime(seconds) {
  let hours = Math.floor(seconds / 3600)
  let minutes = Math.floor((seconds % 3600) / 60)
  let sec = ((seconds % 3600) % 60)

  if (hours < 10) {
    hours = `0${hours}`
  }
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  if (sec < 10) {
    sec = `0${sec}`
  }
  
  timerEl.innerHTML = `${hours}:${minutes}:${sec}`
}

buttonEl.addEventListener('click', () => {
  if (inputEl.value) clearInterval(intervalId)
  const input = inputEl.value.trim().split('').filter(item => !isNaN(parseInt(item))).join('')
  const seconds = Number(input);
  leftSeconds = seconds

  renderTime(leftSeconds)
  animateTimer()
  
  inputEl.value = '';
});



