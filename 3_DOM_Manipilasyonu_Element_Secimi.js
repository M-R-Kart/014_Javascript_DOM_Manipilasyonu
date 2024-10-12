//! Elementlerin Seçilmesi

DOM manipülasyonu yaparken, web sayfasındaki elementleri seçmek ilk adımdır. 
JavaScript te DOM elementlerini seçmek için çeşitli yöntemler bulunur ve her 
yöntem belirli durumlar için uygun olabilir. İşte en yaygın kullanılan yöntemler


let veri;

//! Elementlerin kendisini - id - className çağırma
veri = document.getElementById("header");
  //* <h2 class="app-title" id="header">Todo List</h2>	__ index.html 19. satır.
veri = document.getElementById("header").id;
  //* "header" id'li elementi aldık. __ index.html 19. satır.
veri = document.getElementById("header").className;
  //* app-title  __ index.html 19. satır.

//! Kaydedilen elementin sonrasındaki kısaltmalar
veri = document.getElementById("header"); //* Bu kısım yazıldıysa alt satırdaki artık kısaltmasıdır.
veri = veri.id; //* Üst satırda zaten veri değişkeni içerisine header satırını attık.
veri = veri.className; //* Farklı bir kısaltma örneği

//! Çağırılan elementin içerisindeki yazının style özellikleri değiştirme. 
veri.style.color = "blue"; 
  //* "Todo List" yazılı başlık mavi olur.
veri.style.fontSize = "50px";
  //* "Todo List" yazılı başlığın yazı boyutu değişir.
veri.style.fontWeight = "bold";
  //* "Todo List" yazılı başlığın harfleri kalınlaştırılmış olur.
veri.style.display = "none";
  //* "Todo List" yazılı başlığın görünür olmasını kaldırdık.

document.getElementById("header").innerText = "Yapılacaklarlar";
  //* "Todo List" yazılı başlık "Yapılacaklar" olarak değiştirdik.

document.getElementById("header").innerHTML = "<b> ToDo List </b>"; //! Başlığın harflerini kalınlaştırdır.
  //* "Todo List" yazılı başlığın harflerini kalınlaştırdık.
  
console.log(veri);


//!  document.querySelector() Metodu

Bu yöntem, bir HTML elementini onun etiketi veya özelliklerine göre seçer. 
Etiketler, HTML elementlerinin türlerini ve özelliklerini tanımlar. Özellikler, 
id, class, data, href gibi özelliklerdir.

//? id etiketini çağır
console.log(document.querySelector("#header")); 
  //* <h2 class="app-title" id="header">Todo List</h2> __ index.html 19. satır.

//? class etiketini çağır
console.log(document.querySelector(".card-header")); 
  //* <div class="card-header"> New Task </div> __ index.html 21. satır.

//? etiketi div olanları göster
console.log(document.querySelector("div")); 
  //* <div class="container p-3">…</div> __ index.html 18. satır.

//? listenin ilk çocuğunun yazısını mavi yap
document.querySelector("li").style.color = "blue"; 
  //* index.html 46. satır = listenin ilk elemanını "Todo 1" mavi olarak değişti.

//? listede son çocuğunu yazısını kırmızı yap
document.querySelector("li:last-child").style.color = "red"; 
  //* index.html 61. satır = listenin son elemanını "Todo 4" kırmızı olarak değişti.

//? 2. liste elemanı yazısını sarıye çevir.
document.querySelector("li:nth-child(2)").style.color = "yellow"; 
  //* index.html 51. satır = listenin son elemanını "Todo 2" kırmızı olarak değişti.

//? listedeki ilk elemanın clasını değiştir
document.querySelector("li").className ="list-group-item list-group-item-danger"; 
  //* index.html 46. = <li class="list-group-item list-group-item-secondary">Todo 1

//? listenin elemanına class ekle
document.querySelector("li:nth-child(3)").classList.add("active"); 
  //* index.html 56. = <li class="list-group-item list-group-item-secondary">Todo 3
