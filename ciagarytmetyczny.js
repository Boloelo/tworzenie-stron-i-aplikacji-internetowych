
let wyrazpierwszy = parseFloat(document.getElementById('wyrazpierwszy').value);
        let wyrazdrugi = parseFloat(document.getElementById('wyrazdrugi').value);
        let n = parseInt(document.getElementById('n').value);
        const guzik = document.getElementById('guzik');
        guzik.addEventListener("onclick", function(){

            const roznica = wyrazdrugi - wyrazpierwszy;
            const sum = (n / 2) * (2 * wyrazpierwszy + (n - 1) * roznica);
    
     document.getElementById('wynik').innerHTML = sum;
     console.log(wyrazperwszy);
     
        

        })
    
