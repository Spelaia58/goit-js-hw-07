const inputName = document.getElementById("name-input");
const outputName = document.getElementById("name-output");
const text = document.querySelector("h1");

text.hidden = true;

const addUserName = () => {
  let name = inputName.value.trim();
  text.hidden = false;
  outputName.textContent = name.length > 0 ? name : "незнакомец";
};
inputName.addEventListener("input", addUserName);
inputName.addEventListener("blur", addUserName);
