// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

// const superlinkEL = document.querySelector('#super_link');
// console.log(superlinkEL);

const superlinkEL = document.getElementById('super_link');
console.log(superlinkEL);


// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

const cardlinkEl = document.querySelectorAll('.card-link');
cardlinkEl.forEach(element => {
  element.textContent = 'ссылка ';
});
console.log(cardlinkEl);

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

const cardbodyEl = document.querySelectorAll('.card-body .card-link');
console.log(cardbodyEl);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const datanumberEl = document.querySelector('[data-number="50"]');
console.log(datanumberEl);

// 5. Выведите содержимое тега title в консоль.

console.log(document.title);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const cardtitleEl = document.querySelector('.card-title').parentNode;
console.log(cardtitleEl);

// 7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const cardEl = document.querySelector('.card');
const paragraphEl = document.createElement('p');
paragraphEl.textContent = 'Привет';
cardEl.prepend(paragraphEl);

// 8. Удалите тег h6 на странице.

document.querySelector('h6').remove();