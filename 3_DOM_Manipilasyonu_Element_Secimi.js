//! Elementlerin Seçilmesi

DOM manipülasyonu yaparken, web sayfasındaki elementleri seçmek ilk adımdır. 
JavaScript te DOM elementlerini seçmek için çeşitli yöntemler bulunur ve her 
yöntem belirli durumlar için uygun olabilir. İşte en yaygın kullanılan yöntemler


let veri;

//! Elementlerin kendisini - id - className çağırma
veri = document.getElementById("header");
  //* <h2 class="app-title" id="header">Todo List</h2>	// index.html 19. satır.
veri = document.getElementById("header").id;
  //* "header" id'li elementi aldık. // index.html 19. satır.
veri = document.getElementById("header").className;
  //* app-title  // index.html 19. satır.

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

console.log(document.querySelector("#header")); //! header id seçmiş olduk.
console.log(document.querySelector(".card-header")); //! classı card-header ekranda gösterir.
console.log(document.querySelector("div")); //! etiketi div olanları gösterir.

document.querySelector("li").style.color = "blue"; //! listenin ilk elemanını mavi yaptık.
document.querySelector("li:last-child").style.color = "red"; //! listede son elemanı kırmızı oldu.
document.querySelector("li:nth-child(2)").style.color = "yellow"; //! 2. liste elemanı sarıye çevirdik.

document.querySelector("li").className =
  "list-group-item list-group-item-danger"; //! listedeki ilk elemanın clasını değiştirdik.

document.querySelector("li:nth-child(3)").classList.add("active"); //! listenin elemanına class ekledik.


//! 1. getElementById

Bu yöntem, bir HTML elementini onun id niteliğine göre seçer. 
Her sayfa öğesinin benzersiz bir id değeri olması gerekir.

//* JavaScript:
var element = document.getElementById("myElement");

//? Örnek: 
//* HTML:
<h1 id = "baslik">Merhaba!</h1>
<script>
  var baslik = document.getElementById("baslik");
  baslik.innerHTML = "Yeni Başlık";
</script>

//! 2. getElementsByClassName

Bu yöntem, bir HTML elementinin sınıf adınına göre bir dizi nesneleri döndürür.
Bir sayfa'da birden fazla elementin aynı sınıfı olması gerekir.

//* JavaScript:
var elements = document.getElementsByClassName("myClass");

//? Örnek:
//* HTML:
<div class="kutu">1</div>
<div class="kutu">2</div>
<script>
  var kutular = document.getElementsByClassName("kutu");
  kutular[0].innerHTML = "Birinci Kutu";  // İlk kutuyu seçip değiştirme
</script>

//! 3. getElementsByTagName

Bu yöntem, belirtilen etiket adına göre tüm elementleri seçer. 
Tüm <div>, <p>, veya başka bir etiket türünü seçmek için kullanılır.

//* JavaScript:
var paragraphs = document.getElementsByTagName("p");

//? Örnek:
//* HTML:
<p>Birinci paragraf</p>
<p>İkinci paragraf</p>
<script>
  var paragraflar = document.getElementsByTagName("p");
  paragraflar[1].innerHTML = "İkinci Paragraf Güncellendi";
</script>

//! 4. querySelector

Bu yöntem, CSS seçicilerini kullanarak ilk eşleşen elementi seçer. 
Çok esnek ve güçlü bir yöntemdir çünkü id, sınıf veya etiket gibi farklı türde seçimler yapılabilir.

//* JavaScript:
var element = document.querySelector(".myClass");

//? Örnek:
//* HTML:
<h1 id="baslik">Merhaba!</h1>
<p class="kutu">Bir Paragraf</p>
<script>
  var baslik = document.querySelector("#baslik");
  var kutu = document.querySelector(".kutu");
  baslik.innerHTML = "Başlık Güncellendi!";
  kutu.innerHTML = "Paragraf Güncellendi!";
</script>

//! 5. querySelectorAll

Bu yöntem de CSS seçicilerini kullanır, ancak tüm eşleşen elementleri seçer ve 
bir NodeList (dizi benzeri yapı) döner.

//* JavaScript:
var elements = document.querySelectorAll(".myClass");

//? Örnek:
//* HTML:
<p class="paragraf">1. Paragraf</p>
<p class="paragraf">2. Paragraf</p>
<script>
  var paragraflar = document.querySelectorAll(".paragraf");
  paragraflar.forEach(function(paragraf, index) {
    paragraf.innerHTML = index + 1 + ". Paragraf Güncellendi";
  });
</script>

//! 6. children ve childNodes

children ve childNodes özellikleri, bir elementin alt elemanlarını ve bu elemanların 
sahip olduğu tüm düğümleri döner. children özelliklerde, elementlerin sırasıyla 
dönüyor, childNodes özelliklerde ise elementlerin sırasıyla ve metin düğümlerinde de 
dönüyor.

//* JavaScript:
var container = document.getElementById("container");
var children = container.children;

//? Örnek:
//* HTML:
<div id="container">
  <p>Bir Paragraf</p>
  <p>İkinci Paragraf</p>
</div>
<script>
  var container = document.getElementById("container");
  var ilkCocuk = container.children[0];
  ilkCocuk.innerHTML = "Güncellenmiş İlk Paragraf";
</script>

//! Özet:

DOM manipülasyonu yaparken document.getElementById(), document.getElementsByClassName(), 
document.getElementsByTagName(), document.querySelector(), document.querySelectorAll() ve 
elementlerin children ve childNodes özelliklerini kullanarak elementleri ve alt elemanları 
seçebilirsiniz. Bu özellikler, elementlerin sırasıyla, metin düğümlerinde ve 
sahip olduğu alt elemanların sayısını döndürür.

* getElementById: Tekil id bazlı element seçimi.
* getElementsByClassName: Sınıfa göre birden fazla element seçimi.
* getElementsByTagName: Belirli bir etiket adına göre element seçimi.
* querySelector: İlk eşleşen element için CSS seçici ile seçim.
* querySelectorAll: Tüm eşleşen elementler için CSS seçici ile seçim.
* Bu yöntemler, sayfadaki HTML elementlerini JavaScript ile manipüle etmenin temel taşlarıdır.
