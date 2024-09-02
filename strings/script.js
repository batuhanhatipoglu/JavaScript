// Strings

var ad = 'Batuhan';
var soyad = 'Hatipoglu';
var yas = 27;
var sehir = 'Balıkesir';

var mesaj = ' Benim adım ' + ad + ' ve soyadım '
+ soyad + '. ' + sehir + '\'de yasıyorum.' + ' Emekliliğime ' + (65-yas) + ' yılım kaldı. ';

// Template Strings
mesaj = `Benim adım ${ad} ve soyadım ${soyad}.${sehir}'de yaşıyorum.Emekliliğe ${65 - yas} yılım kaldı. `;

console.log(mesaj);




