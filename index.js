// html sayfasındaki sayac idli öğeyi yazdır değişkenine atadık
let yazdır = document.getElementById("counter")
// sayac adlı değişken oluturup 0 değerini verdik
let sayac = 0


// html sayfasındaki + ve - butonlarını değişkenlere atadık
let arti = document.getElementById("plus")
let eksi = document.getElementById("subtract")

// arti değişkenine atadığımız buttonun tıklanma olayını dinliyoruz ve tıklandığı zaman arttir fonksiyonunu çalıştırıyoruz
arti.addEventListener("click" ,arttir)

// arttir fonksiyonunu oluşturuyoruz fonksiyon çalıştığında sayac değikenini yazdırıyoruz ve bir artmasını istiyoruz
function arttir(){
    yazdır.innerHTML=sayac
    sayac++
}

// eksit değişkenine atadığımız buttonun tıklanma olayını dinliyoruz ve tıklandığı zaman arttir fonksiyonunu çalıştırıyoruz
eksi.addEventListener("click" ,eksilt)

// arttir fonksiyonunu oluşturuyoruz fonksiyon çalıştığında sayac değikenini yazdırıyoruz ve bir artmasını istiyoruz
function eksilt(){
    yazdır.innerHTML=sayac
    sayac--
}

