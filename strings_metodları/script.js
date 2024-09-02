// Strings Metodları

var kursAdi = "Komple Uygulamalı Web Geliştirme Eğitimi";
var sonuc;

sonuc = kursAdi.toLocaleLowerCase();
sonuc = kursAdi.toLocaleUpperCase();
sonuc = kursAdi.length;
sonuc = kursAdi [0];
sonuc = kursAdi.slice(0,6);
sonuc = kursAdi.slice(10);
sonuc = kursAdi.slice(-10);
sonuc = kursAdi.slice(-10, -5);

sonuc = kursAdi.substring(10);

sonuc = kursAdi.replace('Eğitimi','Kursu');

sonuc = kursAdi.indexOf('Web');
sonuc = kursAdi.startsWith("https");
sonuc = kursAdi.split(" ");
sonuc = kursAdi.split(" ")[1];
sonuc = kursAdi.split(" ")[3];









console.log(sonuc)
