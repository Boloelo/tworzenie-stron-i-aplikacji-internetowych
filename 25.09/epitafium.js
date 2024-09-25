document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('guzik');

    if (button) {
        button.addEventListener('click', () => {
            alert('twoje bezwładne ręce milczą w kieszeniach');
        });
    }
});