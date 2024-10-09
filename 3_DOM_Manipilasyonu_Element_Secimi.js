//! Elementlerin Seçilmesi

// -- Tek Element Seçimi --

//! document.getElementById() Metodu
/*
let veri;

veri = document.getElementById("header");
veri = document.getElementById("header").id;
veri = document.getElementById("header").className;

veri = document.getElementById("header"); //! Bu kısım yazıldıysa alt satırdaki artık kısaltmasıdır.
// veri = veri.id; //! Üst satırda zaten veri değişkeni içerisine header satırını attık.
//veri = veri.className;

veri.style.color = "blue"; //! Başlığın rengini değiştirmiş oluruz.
veri.style.fontSize = "50px"; //! Başlığın boyutunu değiştirdik.
//veri.style.fontWeight = "bold"; //! Başlığın harflerini kalınlaştırdık.
// veri.style.display = "none"; //! Başlığı görünmez yaptık.

document.getElementById("header").innerText = "Yapılacaklarlar"; //! Başlığın yazısını değiştirdik.
document.getElementById("header").innerHTML = "<b> ToDo List </b>"; //! Başlığın harflerini kalınlaştırdır.

console.log(veri);
*/

//!  document.querySelector() Metodu

console.log(document.querySelector("#header")); //! header id seçmiş olduk.
console.log(document.querySelector(".card-header")); //! classı card-header ekranda gösterir.
console.log(document.querySelector("div")); //! etiketi div olanları gösterir.

document.querySelector("li").style.color = "blue"; //! listenin ilk elemanını mavi yaptık.
document.querySelector("li:last-child").style.color = "red"; //! listede son elemanı kırmızı oldu.
document.querySelector("li:nth-child(2)").style.color = "yellow"; //! 2. liste elemanı sarıye çevirdik.

document.querySelector("li").className =
  "list-group-item list-group-item-danger"; //! listedeki ilk elemanın clasını değiştirdik.

document.querySelector("li:nth-child(3)").classList.add("active"); //! listenin elemanına class ekledik.
