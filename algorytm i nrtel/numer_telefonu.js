const checkbox = document.getElementById('pokaznr');
        const jeden = document.getElementById('jeden');
        const dwa = document.getElementById('dwa');
        const trzy = document.getElementById('trzy');

  
        checkbox.addEventListener('change', function() {
            console.log("jestem tutaj")
            if (this.checked) {
                jeden.classList.remove('blured'); 
                dwa.classList.remove('blured');
                trzy.classList.remove('blured');
            } else {
                jeden.classList.add('blured');
                dwa.classList.add('blured');
                trzy.classList.add('blured'); }
        });

        
       