
DOM u yakından tanıdığımızda, HTML sayfalarının nasıl yapısallaştırıldığını ve JavaScript ile nasıl 
manipüle edilebileceğini derinlemesine görebiliriz. DOM, bir sayfanın içeriğini ve yapısını, ağaç 
benzeri bir modelle temsil eder. Her bir HTML etiketi, birer düğüm (node) olarak adlandırılır ve bu 
düğümler arasında ebeveyn (parent), çocuk (child) ve kardeş (sibling) ilişkileri vardır.

//! DOM Yapısı
HTML belgesi bir kök düğüm olan document ile başlar. Bu document düğümünün altında diğer 
HTML elementleri yer alır. Her element birer düğümdür ve metinler, yorumlar bile bir düğüm 
olarak kabul edilir. Temel DOM yapısı şu şekildedir:

//* HTML:
<!DOCTYPE html>
<html>
  <head>
    <title>Örnek Sayfa</title>
  </head>
  <body>
    <h1>Başlık</h1>
    <p>Bir paragraf.</p>
  </body>
</html>

//! DOM Temsili
Bu HTML belgesinin DOM temsili şu şekildedir.

    document
    |
    └── <html>
            ├── <head>
            │     └── <title>Örnek Sayfa</title>
            └── <body>
                ├── <h1>Başlık</h1>
                └── <p>Bir paragraf.</p>

//! DOM Düğümleri (Nodes)
DOM'daki her şey bir düğümdür. Düğümler farklı türlerde olabilir:

1- Element Düğümleri (Element Nodes): HTML etiketlerini temsil eder (<html>, <body>, <div> vb.).
2- Metin Düğümleri (Text Nodes): HTML etiketlerinin içindeki metinleri temsil eder.
3- Yorum Düğümleri (Comment Nodes): HTML yorumlarını (<!-- Bu bir yorumdur -->) temsil eder.
4- Belge Düğümü (Document Node): Tüm sayfanın kök düğümü olan document.

//! DOM ile Etkileşim
JavaScript ile DOM yapısını kullanarak bir sayfanın içeriğini dinamik olarak değiştirebilirsin. 
DOM manipülasyonunu anlamak için temel işlevler ve özellikler şunlardır:

//! 1. Elementleri Seçmek
Elementleri seçmek DOM ile etkileşim kurmanın ilk adımıdır. Daha önce ele aldığımız 
getElementById, querySelector gibi yöntemlerle bir element seçilebilir.

//* HTML:
<p id="paragraf">Bu bir paragraftır.</p>
<script>
  var p = document.getElementById('paragraf');
  console.log(p); // Seçilen <p> elementi
</script>

2. Elementlerin İçeriğini Değiştirmek
Seçilen bir elementin içeriğini değiştirmek için innerHTML ya da textContent kullanılabilir.

javascript
Kodu kopyala
document.getElementById('paragraf').innerHTML = 'Paragrafın yeni içeriği';
3. Yeni Elemanlar Oluşturmak
DOM'a yeni eleman eklemek için createElement() ve appendChild() gibi yöntemler kullanılır.

javascript
Kodu kopyala
var yeniP = document.createElement('p');
yeniP.textContent = 'Bu yeni bir paragraf.';
document.body.appendChild(yeniP); // Yeni paragraf body'ye eklenir.
4. Elementleri Kaldırmak
Bir elementi DOM'dan kaldırmak için removeChild() yöntemi kullanılır.

javascript
Kodu kopyala
var silinecekP = document.getElementById('paragraf');
silinecekP.parentNode.removeChild(silinecekP); // Paragrafı siler.
5. Element Özelliklerini (Attributes) Değiştirmek
Elementlerin özelliklerini (örneğin, class, id, src, vb.) değiştirmek için setAttribute() ve getAttribute() kullanılır.

javascript
Kodu kopyala
var img = document.createElement('img');
img.setAttribute('src', 'image.jpg'); // Resim kaynağını ayarlar.
document.body.appendChild(img);
6. CSS Stillerini Değiştirmek
Bir elementin stilini doğrudan değiştirmek için style özelliği kullanılabilir.

javascript
Kodu kopyala
var p = document.getElementById('paragraf');
p.style.color = 'red';  // Paragrafın rengini kırmızı yapar.
p.style.fontSize = '20px'; // Yazı boyutunu değiştirir.
7. DOM Olayları (Events)
DOM ile kullanıcı etkileşimlerini yönetmek için olaylar (events) kullanılır. Olaylar, kullanıcının bir düğmeye tıklaması, klavyeden bir tuşa basması veya sayfayı kaydırması gibi etkileşimlerle tetiklenir.

Olay eklemek için addEventListener() yöntemi kullanılır:

javascript
Kodu kopyala
var buton = document.getElementById('myButton');
buton.addEventListener('click', function() {
    alert('Butona tıkladınız!');
});
DOM'daki İlişkiler
DOM'daki elementler arasında ebeveyn, çocuk ve kardeş ilişkileri vardır. Bu ilişkiler şu yöntemlerle tanımlanır:

parentNode: Bir elementin ebeveynini döner.
childNodes: Bir elementin tüm çocuklarını döner.
firstChild ve lastChild: İlk ve son çocuğu döner.
nextSibling ve previousSibling: Kardeş elementleri döner.
html
Kodu kopyala
<div id="konteyner">
  <p>Birinci Paragraf</p>
  <p>İkinci Paragraf</p>
</div>
<script>
  var konteyner = document.getElementById('konteyner');
  var birinciCocuk = konteyner.firstChild;
  var ikinciCocuk = birinciCocuk.nextSibling;
  console.log(ikinciCocuk); // İkinci paragrafı döner.
</script>
Özet
DOM, web sayfasının yapısını temsil eden bir modeldir ve JavaScript ile bu yapıya erişerek sayfanın içeriğini dinamik olarak değiştirebilirsin. Elementleri seçmek, içeriği ve özellikleri değiştirmek, yeni elementler eklemek ve olayları yönetmek gibi işlemlerle DOM manipülasyonu yapılır. DOM'u iyi anlamak, daha etkileşimli ve dinamik web uygulamaları geliştirmek için oldukça önemlidir.


let veri;

veri = window.document;
veri = window.document.head;
veri = window.document.body;
veri = window.document.URL;
veri = window.document.domain;
veri = window.document.images;
veri = window.document.forms;
veri = window.document.forms[0].id;
veri = window.document.forms[0].method;
veri = window.document.forms[0].action;
veri = window.document.scripts;
veri = window.document.scripts[2];

console.log(veri);
