// Nesneler (Objects)

// let kullanici = [
//     "Batuhan",
//     "Hatipoğlu",
//     40
// ];

// key - value

let kullanici1 = {
    "ad": "Batuhan",
    "soyad": "Hatipoğlu",
    "yas": 40,
    "adres": {
        "sehir": "balıkesir",
        "ilce" : "altıeylül",
    }
};

let kullanici2 = {
    "ad": "Berkay",
    "soyad": "Hatipoğlu",
    "yas": 20,
    "adres": {
        "sehir": "balıkesir",
        "ilce" : "altıeylül",
    }
};


let kullanicilar = [kullanici1, kullanici2];

let sonuc;

sonuc = kullanici1;
sonuc = kullanici1["ad"];
sonuc = kullanici1["soyad"];
sonuc = kullanici1["adres"];
sonuc = kullanici1["adres"]["sehir"];

sonuc = kullanicilar[1].ad;

console.log(sonuc);