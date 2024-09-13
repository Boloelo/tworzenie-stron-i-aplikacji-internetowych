document.querySelector('header').style.backgroundColor = 'yellow';

document.querySelector('header h1').style.fontFamily = 'Arial Black';
document.querySelector('header h1').textContent = 'Preambuła';

const sekcja = document.querySelectorAll('section');
console.log(sekcja);
sekcja[0].style.border = '2px solid brown';
sekcja[1].style.border = '2px solid brown';
sekcja[2].style.border = '2px solid brown';

document.querySelector('.main_column h1').textContent = 'Specjalność szefa';

const kolumna = document.querySelector('.main_column');
const paragraf = document.createElement('p');
paragraf.textContent = 'Kebab na frytkach_-_';
kolumna.appendChild(paragraf);

const footer = document.querySelector('footer');
const div = document.createElement('div');
div.style.backgroundKolor = 'pink';
div.style.padding = '10px';
div.style.textAlign = 'center';
const Pfooter = document.createElement('p');
Pfooter.innerText = '&copy';
footer.appendChild(div);
div.appendChild(Pfooter);
