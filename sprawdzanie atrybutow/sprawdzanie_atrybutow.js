const guzik = document.getElementById("guzik");
const wpisywanie = document.getElementById("wpisywanie");
guzik.addEventListener("click", function(){
wpisywanie.toggleAttribute("disabled");


if(wpisywanie.hasAttribute("disabled")){



guzik.innerHTML='Edycja nie jest możliwa'
wpisywanie.value='👍😂🐬♟🥝☂™'
}
else 
{
guzik.innerHTML='Edycja jest możliwa';
wpisywanie.value='';
}




})