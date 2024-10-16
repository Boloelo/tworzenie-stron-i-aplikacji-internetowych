const guzik = document.getElementById('guzik');
const wynik = document.getElementById('wynik');
const akapit = document.getElementById('akapit');

guzik.addEventListener("click" ,  function () {
    if (wynik.style.display === 'none'
    ) {
        wynik.style.display = 'inline';
        guzik.textContent = 'Ukryj wynik';

    }
    else {
        wynik.style.display = 'none';
        guzik.textContent = 'Pokaż wynik'
    }




})