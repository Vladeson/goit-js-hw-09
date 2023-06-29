function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

    promise
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

const form = document.querySelector(".form")
const inputDelay = document.querySelector('[name="delay"]')
const inputStep = document.querySelector('[name="step"]')
const inputAmount = document.querySelector('[name="amount"]')

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const amount = Number(inputAmount.value);
  let delay = Number(inputDelay.value);
  const stept = Number(inputStep.value);
  let position = 1;

  for (let i = 0; i < amount; i++) {
    createPromise(position, delay)
    position++
    delay += stept;
  }
})