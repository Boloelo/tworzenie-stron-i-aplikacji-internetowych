document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('przycisk1');
    
    button.addEventListener('click', () => {
        const h6Element = document.querySelector('h6');
        h6Element.innerHTML = "<i>świetnie!</i>";
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('przycisk2');
    
    button.addEventListener('click', () => {
        const h5Element = document.querySelector('h5');
        h5Element.innerHTML = "<i>świetnie!</i>";
    });
});

document.getElementById('zmiendir').addEventListener('click', function() {
    
    var paragraph = document.getElementById('tekst');
    
    
    paragraph.setAttribute('dir', 'rtl');
});



    
