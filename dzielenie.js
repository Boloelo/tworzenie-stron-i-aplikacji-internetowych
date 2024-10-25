const val1 = document.getElementById('value1');
const val2 = document.getElementById('value2');
const val3 = document.getElementById('value3');
const val4 = document.getElementById('value4');

function calculate() {
let val1v = parseInt(Math.trunc(val1.value))
let val2v = parseInt(Math.trunc(val2.value));

console.log(val1v);
console.log(val2v);

const wyndziel = Math.floor(val1v / val2v);
const reszta = val1v % val2v;
console.log(wyndziel);

val3.value = wyndziel;
val4.value = reszta;

}

val1.addEventListener("change", calculate);
val2.addEventListener("change", calculate);