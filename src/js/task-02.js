const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');
for (let i = 1; i <= 6; i += 1) {
  let li = document.createElement('li');
  for (let j = 1; j >= ingredients.length; j += 1) {
    li.textContent = ingredients[j];
  }
  listEl.append(li);
}

console.log(listEl)