const akapit1 = document.getElementById('akapit1');
const akapit2 = document.getElementById('akapit2');
const akapit3 = document.getElementById('akapit3');
const guzik1 = document.getElementById('guzik1');
const guzik2 = document.getElementById('guzik2');
const span1 = document.getElementById('span1');
const span2 = document.getElementById('span2');
guzik1.addEventListener("click", function(){
span1.textContent = akapit1.textContent.substring(9,19);
span1.style.border = "1px solid crimson";
span1.style.padding = "8px";



    })
    guzik2.addEventListener("click", function(){
        span2.textContent = akapit1.textContent.substring(27);
        span2.style.border = "1px solid crimson";
span2.style.padding = "8px";
        
        })