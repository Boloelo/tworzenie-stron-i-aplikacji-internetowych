
const textElement = document.getElementById('akapit1');

document.getElementById('guzik1').onclick = function() {
    const currentText = textElement.innerText;
    const paddedText = currentText.padStart(20, '_'); 
    textElement.innerText = paddedText;
};

document.getElementById('guzik2').onclick = function() {
    const currentText = textElement.innerText;
    const paddedText = currentText.padEnd(30, '.'); 
    textElement.innerText = paddedText;
};





