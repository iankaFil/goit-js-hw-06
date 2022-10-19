const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');
const item = ingredients.forEach(ingredient => {
  let list = document.createElement('li');
  list.classList.add('item');
  list.innerHTML = ingredient;
  listEl.append(list);
})

console.log(listEl)