//* Maaş Zammı Hesaplama
//? Bir çalışan için maaş zammı hesaplayalım. Kullanıcıdan mevcut maaşı ve çalışma yılını
//? iste ve şu kurallara göre zam oranını belirle:

//? Eğer çalışan 1 yıldan az çalıştıysa %5 zam,
//? 1-5 yıl arası çalıştıysa %10 zam,
//? 5 yıldan fazla çalıştıysa %15 zam yap.
//? Mevcut maaşı ve zamlı maaşı ekranda göster.

//! Kullanıcıdan mevcut maaş ve çalışma yılını al
let mevcutMaas = prompt("Lütfen mevcut maaşınızı giriniz.");
let calismaYili = prompt("Lütfen kaç yıldır çalıştığınızı giriniz.");

//! Maaşı ve yılı sayıya çevir
mevcutMaas = parseInt(mevcutMaas);
calismaYili = parseInt(calismaYili);

//! Eğer maaş veya yıl geçerli değilse uyarı ver
if (isNaN(mevcutMaas) || isNaN(calismaYili)) {
  console.log("Lütfen bilgileri doğru girdiğinizden emin olun.");
} else {
  let zamOrani = 0;

  //! Zam oranını belirle
  if (calismaYili < 1) {
    zamOrani = 0.05;
  } else if (calismaYili >= 1 && calismaYili <= 5) {
    zamOrani = 0.1;
  } else if (calismaYili > 5) {
    zamOrani = 0.15;
  }

  //! Zamlı maaşı hesapla
  let zamliMaas = mevcutMaas + mevcutMaas * zamOrani;

  //! Sonuçları göster
  console.log(`Mevcut maaş: ${mevcutMaas.toFixed(2)} ₺`);
  console.log(`${calismaYili} yıldır bu işletme çalıştığınızı bildirdiniz.`);
  console.log(`Zam oranı: %${zamOrani * 100}`);
  console.log(`Zamlı maaşınız: ${zamliMaas.toFixed(2)} ₺`);
}

/*
Nasıl Çalışır?
1- prompt() ile maaş ve çalışma yılı bilgilerini alıyoruz.
2- parseFloat() ve parseInt() ile girilen değerleri sayıya çeviriyoruz.
3- if-else ile çalışma yılına göre zam oranını belirliyoruz.
4- Maaşa zam oranını ekleyerek zamlı maaşı hesaplıyoruz ve sonucu ekranda gösteriyoruz.
*/
