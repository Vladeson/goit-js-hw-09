import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector("[data-start]")

const dataDays = document.querySelector("[data-days]")
const dataHours = document.querySelector("[data-hours]")
const dataMinutes = document.querySelector("[data-minutes]")
const dataSeconds = document.querySelector("[data-seconds]")

let intervalId = null;
let selectedDate;
let leftTime;

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      
      if (selectedDates[0] <= new Date()) {
          alert("Please choose a date in the future")
      } else {
          startBtn.disabled = false;
          selectedDate = selectedDates[0];
      }
  },
};

flatpickr("#datetime-picker", options)

startBtn.addEventListener("click", () => {
    intervalId = setInterval(() => {
        leftTime = selectedDate - new Date()
        if(leftTime > 0) {
            const { days, hours, minutes, seconds } = convertMs(leftTime);
            dataDays.textContent = addLeadingZero(days);
            dataHours.textContent = addLeadingZero(hours)
            dataMinutes.textContent = addLeadingZero(minutes)
            dataSeconds.textContent = addLeadingZero(seconds)
        } else {
            clearInterval(intervalId);
        }
    }, 1000)
})

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

const addLeadingZero = (value) => {
  return value.toString().padStart(2, '0');
};