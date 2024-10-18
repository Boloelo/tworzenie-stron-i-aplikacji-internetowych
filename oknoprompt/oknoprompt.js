const guzik = document.getElementById("guzik");


guzik.addEventListener("click", function(){
let imie = prompt("Podaj swoje imię");

if(imie==null){
alert("Anulowałeś akcję, a okienko zwróciło" +imie)

}
else{
alert("Witaj" + imie)
}



})