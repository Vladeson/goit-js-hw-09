function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startBtn = document.querySelector("[data-start]")
const stopBtn = document.querySelector("[data-stop]")
const body = document.querySelector("body");

let intervalId = null;

const setColorInterval = () => {
    intervalId = setInterval(() => { body.style.backgroundColor = getRandomHexColor()}, 1000 )
}

startBtn.addEventListener("click", () => {
    setColorInterval();
    startBtn.disabled = true;
})

stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    startBtn.disabled = false;
})
