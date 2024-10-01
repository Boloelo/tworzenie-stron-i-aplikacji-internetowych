let a=15;
let b=5
const div =document.getElementById('wynik')
wynik.innerHTML="wynik"+(a+b);


const wynik1=document.getElementById('wynik1');
let c=75;
let d=125;
wynik1.innerHTML='<h1>'+a+'+'+b+'='+(a+b)+'</h1>';


const powitaj=document.querySelector('#powitaj');
const tekst=document.querySelector('#tekst');

powitaj.addEventListener("click", klik)

function klik(){
    tekst.innerHTML="<h1>Witaj w miescie</h1>"
}