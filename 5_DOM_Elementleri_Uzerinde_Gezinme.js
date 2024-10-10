//! DOM Elementleri Üzerinde Gezinme

let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const card = document.querySelector(".card");

value = todoList;
value = todo;
value = card;

//! Child Nodes

value = todoList.childNodes;

value = todoList.children; // satırları işleme almaz sadece elementleri listeler.
value = todoList.children[0]; // 0. index alır ilk elemanı
value = todoList.children[todoList.children.length - 1]; // son elemanı listeleriz.
value = todoList.children[1].textContent = "değişen madde"; // 1. index yazısını değiştirme

value = card;
value = card.children;
value = card.children[1].children[0].textContent = "Merhaba";

value = todoList;
value = todoList.children[0]; // 1. elemanı istedik.
value = todoList.firstElelemtChild; // 1. elemanı istemenin farklı yolu
value = todoList.lastElementChild; // son elemanı istedik.

value = todoList.children.length; // todolist kaç çocuğu olduğunu öğreniriz.
value = todoList.childElementCount; // üst satırın farklı yöntemi.

//* yukarıda ebeveynlerden çocuklara gitmeyi öğrendik
//* alt kısımda tam tersi çocuklardan ebeveynlere nasıl gidilir ona bakalım.

value = card;
value = card.parentElement; // card ebeveyni container div erişiriz.
value = card.parentElement.parentElement; // card elementinin 2 üstü dedesi body erişiriz.

//* kardeşten kardeşe erişmek nasıl olur.

value = todo;
value = todo.previousElementSibling; // consoleda en son 1. index olduğumuz için önceki todo 1 geçer.
value = todo.nextElementSibling; // sonraki kardeşe geçmek için yani todo 3
value = todo.nextElementSibling.nextElementSibling; // sonrakinin sonrakine yani todo 4 e gider.
value = todo.previousElementSibling.previousElementSibling; // öncekinin öncekine gitmek için

console.log(value);
