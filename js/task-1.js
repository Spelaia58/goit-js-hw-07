const categoriesRef = document.querySelectorAll(".item");
console.log(`в списке ${categoriesRef.length} категории`);

const titleRef = document.querySelectorAll(".item");
Array.prototype.forEach.call(titleRef, element => {
  const title = element.firstElementChild.textContent;
  const items = element.lastElementChild.children;
  console.log(`Категория: ${title} / Количество элементов: ${items.length}`);
});
