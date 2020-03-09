const inputValid = document.getElementById("validation-input");
const lengthText = document.getAttribute("data-length");

inputValid.addEventListener("focus", event => {
  let text = lengthText.value.trim();
  const border = event.target;

  if ((inputValid.textContent = text.length)) {
    border.classList.add("valid");
  } else {
    border.classList.add("invalid");
  }
});
