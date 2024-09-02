// String Uygulamaları

let url = "https://www.sadikturan.com"
let kursAdi = "Komple Uygulamalı Web Geliştirme Kursu"

let sonuc;

// url kaç karakterlidir ?
sonuc = url.length;
//kursAdi kaç kelimeden oluşur ?
sonuc = kursAdi.split(" ").length;
//url https ile mi başlıyor ?
sonuc = url.startsWith("https");
//kursAdi içerisinde Eğitimi kelimesi var mı ?
sonuc = kursAdi.indexOf("Eğitimi");













console.log(sonuc);