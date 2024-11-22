const lwierszy = document.getElementById("lwierszy");
const lkolumn = document.getElementById("lkolumn");

const guzik = document.getElementById("guzik");
const tabela = document.getElementById("tabela");
guzik.addEventListener("click", function(){
tabela.innerHTML = ""
if(lwierszy > 0 && lkolumn > 0){
    for(let w = 1; w <= lwierszy; w++){
        const wiersz = tabela.wprowadzwiersz();
        for (let k = 1; k <= lkolumn; k++){
            const kolumna = wiersz.wprowadzkolumne();
            kolumna.
        }
    }
}


})