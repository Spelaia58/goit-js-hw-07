const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const menuIngredients = document.getElementById("ingredients");
const ingredientsName = ingredients.map(ingredient => {
  const ingredientsList = document.createElement("li");
  ingredientsList.classList.add("list");
  ingredientsList.textContent = ingredient;
  return ingredientsList;
});
menuIngredients.append(...ingredientsName);
