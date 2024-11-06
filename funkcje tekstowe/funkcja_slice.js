const akapit1 = document.getElementById('akapit1');
const akapit2 = document.getElementById('akapit2');
const akapit3 = document.getElementById('akapit3');
const guzik1 = document.getElementById('guzik1');
const guzik2 = document.getElementById('guzik2');
guzik1.addEventListener("click", function(){
akapit2.textContent = akapit1.textContent.slice(26,36);


})
guzik1.addEventListener("click", function(){
    akapit2.textContent = akapit1.textContent.slice(26,36);
    
    
    })
    guzik2.addEventListener("click", function(){
        akapit3.textContent = akapit1.textContent.slice(-12,-5);
        
        
        })