//* -- Çoklu Element Seçimi --
//! 1- document.getElementsByClassName()

let veri;

veri = document.getElementsByClassName("list-group-item");
veri = document.getElementsByClassName("list-group-item")[0];
veri = document.getElementsByClassName("list-group-item")[2];

veri = veri[2]; //* 1. satırda sınıfını belirttiğimiz için bu şekilde çağırılabilir.

veri[1].style.fontSize = "30px";
veri[1].style.color = "red";
veri[2].textContent = "new item";

for (let i = 0; i < veri.length; i++) {
  console.log((veri[i].style.color = "orange"));
  console.log((veri[i].textContent = "new item"));
}

//! 2- document.getElementsByTagName()

//? Sayfadaki tüm "li" ve "a" etiketlerini getir.
veri = document.getElementsByTagName("li");
veri = document.getElementsByTagName("a");

//? Sayfadaki "li içindeki a " etiketlerini getir.
veri = document.getElementById("task-list").getElementsByTagName("a");

//! 3- document.querySelectorAll()

veri = document.querySelectorAll("li");

veri.forEach(function (item, index) {
  item.textContent = `${index} - item`;
});

console.log(veri);
