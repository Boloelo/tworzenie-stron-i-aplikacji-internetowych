const p1 = document.getElementById('p1');
document.getElementById("p1").style.color = "darkorchid";
const guzik = document.getElementById('guzik');
const losowa = Math.floor(Math.random() * 30) + 1;
const p2 = document.getElementById('p2');
document.getElementById("p2").style.color = "magenta";
const p3 = document.getElementById('p3');
document.getElementById("p3").style.color = "navy";



guzik.addEventListener("click", function () {
    p1.innerHTML = 'Wylosona liczba to:' + losowa;

    if (losowa > 20) {

        p2.innerHTML = 'Wylosowana liczba jest większa lub równa 20';


    }
  else if(losowa%2==0)
  {
    p3.innerHTML = "Wylosowana liczbe jest liczbą parzystą";
  }
  else{
    p3.innerHTML = "Wylosowana liczbe jest liczbą nieparzystą";
  }
  else if(losowa)



});
