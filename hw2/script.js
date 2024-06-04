// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const dropdownItemEl = document.querySelectorAll(".dropdown-item");
dropdownItemEl.forEach((element) => {
	element.classList.add("super-dropdown");
});
console.log(dropdownItemEl);

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const btnEl = document.querySelector(".btn");
// btnEl.classList.remove("btn-secondary");
btnEl.classList.toggle("btn-secondary");
console.log(btnEl);

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const menuEl = document.querySelector(".menu");
menuEl.classList.remove("dropdown-menu");
console.log(menuEl);

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

const divDropEl = document.querySelector("div.dropdown");
divDropEl.insertAdjacentHTML("afterBegin", '<a href="#">link</a>');
divDropEl.insertAdjacentHTML("afterEnd", '<a href="#">link</a>');
// так как не понял куда именно вставить, вставил и туда и туда

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const dropdownMenuButtonEl = document.querySelector("#dropdownMenuButton");
dropdownMenuButtonEl.setAttribute("id", "superDropdown");
console.log(dropdownMenuButtonEl);

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

const ariaLabEl = document.querySelector('[aria-labelledby]');
ariaLabEl.setAttribute('data-dd', '3');
console.log(ariaLabEl);

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const dropToggleEl = document.querySelector('.dropdown-toggle');
dropToggleEl.removeAttribute('type');
console.log(dropToggleEl);
