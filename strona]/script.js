function Funkcja_walidacja_formularz() {
let formularz_poprawny = true
document.getElementById('pesel').style.backgroundColor = '';
    document.getElementById('imie').style.backgroundColor = '';
    document.getElementById('nazwisko').style.backgroundColor = '';
const kolor_oczu_pola = document.getElementsByName('kolor_oczu');
kolor_oczu_pola.forEach(field =>{
    field.style.outline = '';
});
const pesel = document.getElementById('pesel').value;
if (pesel.trim() === '' || pesel.length !==11) {
    document.getElementById('pesel').style.backgroundColor = 'lightcoral'
    formularz_poprawny = false
}
const imie = document.getElementById('imie').value;
if (imie.trim() === ''){
    document.getElementById('imie').style.backgroundColor = 'lightcoral';
    formularz_poprawny = false;
}
const nazwisko = document.getElementById('nazwisko').value;
if (nazwisko.trim() === '') {
    document.getElementById('nazwisko').style.backgroundColor = 'lightcoral';
    formularz_poprawny = false;
}
 const czy_oczy_zaznaczone = Array.from(kolor_oczu_pola).some(field => field.checked);
 if (!czy_oczy_zaznaczone) {
    kolor_oczu_pola.forEach(field => {
        field.style.outline = '2px solid lightcoral';
    });
    formularz_poprawny = false;
 }
 if (formularz_poprawny) {
    resetujStyle();
 }
 return formularz_poprawny
}
function resetujStyle(){
    document.getElementById('pesel').style.backgroundColor = '';
    document.getElementById('imie').style.backgroundColor = '';
    document.getElementById('nazwisko').style.backgroundColor = '';
    
    const eyeColorFields = document.getElementsByName('kolor_oczu');
    eyeColorFields.forEach(field => {
        field.style.outline = '';
    });
}