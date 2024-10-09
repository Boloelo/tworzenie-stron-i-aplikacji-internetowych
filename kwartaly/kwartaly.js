const guzik = document.getElementById('guzik');
const liczba = document.getElementById('liczba');
const miesiac = Math.floor(Math.random() * 15) + 1;
const kwartal = document.getElementById('kwartal');

guzik.addEventListener("click", function () {

liczba.innerHTML=miesiac;

switch(miesiac = 1,2,3){
    kwartal.innerHTML='I kwartal';
    
}

})
