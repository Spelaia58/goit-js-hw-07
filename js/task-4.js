const sub = document.querySelector('button[data-action="increment"]');
const add = document.querySelector('button[data-action="decrement"]');
const span = document.querySelector("#value");
const wrapper = document.querySelector("#counter");

let counterValue = 0;

sub.addEventListener("click", () => {
  let increment = (counterValue += 1);

  document.getElementById("value").textContent = increment;
});
add.addEventListener("click", () => {
  const decrement = (counterValue -= 1);

  document.getElementById("value").textContent = decrement;
});
