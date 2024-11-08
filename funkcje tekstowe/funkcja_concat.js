const akapit1 = document.getElementById('akapit1');
const guzik1 = document.getElementById('guzik1');
guzik1.addEventListener("click", function(){

let tekst = akapit1;
let wykrzyknik = "!";
let wynik = tekst.concat(wykrzyknik);
akapit1.innerText=wynik;





})