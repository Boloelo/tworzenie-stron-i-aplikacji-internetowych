const pytanie1 = document.getElementById("pytanie1");
const odpowiedz1 = document.getElementById("odpowiedz1");
const pokazodpowiedz1 = document.getElementById("pokazodpowiedz1")
let liczbaklik1 = 0
odpowiedzukryta1 = document.getElementById("odpowiedzukryta1");
pytanie1.addEventListener("click", function(event){
event.preventDefault();
liczbaklik1++;
if(liczbaklik1 == 1){
    pytanie1.innerHTML="&blk34;";
    odpowiedzukryta1.innerHTML="***(3)"
}
else if(liczbaklik1 == 2){
    pytanie1.innerHTML="&blk12;";
    odpowiedzukryta1.innerHTML="l**(3)"
}
else if(liczbaklik1 == 3){
    pytanie1.innerHTML="&blk14;";
    odpowiedzukryta1.innerHTML="l*g(3)"
}
else if(liczbaklik1 == 4){
    pytanie1.innerHTML=""
    odpowiedzukryta1.innerHTML=""
    odpowiedz1.style.display = "inline";
    pokazodpowiedz1.innerHTML="";
}


});

const pytanie2 = document.getElementById("pytanie2");
const odpowiedz2 = document.getElementById("odpowiedz2");
const pokazodpowiedz2 = document.getElementById("pokazodpowiedz2");
odpowiedzukryta2 = document.getElementById("odpowiedzukryta2");
pytanie2.addEventListener("click", function(event){
event.preventDefault();
liczbaklik++;
if(liczbaklik == 1){
    pytanie2.innerHTML="&blk34;";
    odpowiedzukryta2.innerHTML="****(4)"
}
else if(liczbaklik == 2){
    pytanie2.innerHTML="&blk12;";
    odpowiedzukryta2.innerHTML="l***(4)"
}
else if(liczbaklik == 3){
    pytanie2.innerHTML="&blk14;";
    odpowiedzukryta2.innerHTML="l**t(4)"
}
else if(liczbaklik == 4){
    pytanie2.innerHTML=""
    odpowiedzukryta2.innerHTML=""
    odpowiedz2.style.display = "inline";
    pokazodpowiedz2.innerHTML="";
}

});

const pytanie3 = document.getElementById("pytanie3");
const odpowiedz3 = document.getElementById("odpowiedz3");
const pokazodpowiedz3 = document.getElementById("pokazodpowiedz3");
odpowiedzukryta3 = document.getElementById("odpowiedzukryta3");
pytanie3.addEventListener("click", function(event){
event.preventDefault();
liczbaklik++;
if(liczbaklik == 1){
    pytanie3.innerHTML="&blk34;";
    odpowiedzukryta3.innerHTML="****(4)"
}
else if(liczbaklik == 2){
    pytanie3.innerHTML="&blk12;";
    odpowiedzukryta3.innerHTML="n***(4)"
}
else if(liczbaklik == 3){
    pytanie3.innerHTML="&blk14;";
    odpowiedzukryta3.innerHTML="n**b(4)"
}
else if(liczbaklik == 4){
    pytanie3.innerHTML=""
    odpowiedzukryta3.innerHTML=""
    odpowiedz3.style.display = "inline";
    pokazodpowiedz3.innerHTML="";
}

});


const pytanie4 = document.getElementById("pytanie4");
const odpowiedz4 = document.getElementById("odpowiedz4");
const pokazodpowiedz4 = document.getElementById("pokazodpowiedz4");
odpowiedzukryta4 = document.getElementById("odpowiedzukryta4");
pytanie4.addEventListener("click", function(event){
event.preventDefault();
liczbaklik++;
if(liczbaklik == 1){
    pytanie4.innerHTML="&blk34;";
    odpowiedzukryta4.innerHTML="******(6)"
}
else if(liczbaklik == 2){
    pytanie4.innerHTML="&blk12;";
    odpowiedzukryta4.innerHTML="a*****(6)"
}
else if(liczbaklik == 3){
    pytanie4.innerHTML="&blk14;";
    odpowiedzukryta4.innerHTML="a****t(6)"
}
else if(liczbaklik == 4){
    pytanie4.innerHTML=""
    odpowiedzukryta4.innerHTML=""
    odpowiedz4.style.display = "inline";
    pokazodpowiedz4.innerHTML="";
}

});



const pytanie5 = document.getElementById("pytanie5");
const odpowiedz5 = document.getElementById("odpowiedz5");
const pokazodpowiedz5 = document.getElementById("pokazodpowiedz5");
odpowiedzukryta5 = document.getElementById("odpowiedzukryta5");
pytanie5.addEventListener("click", function(event){
event.preventDefault();
liczbaklik++;
if(liczbaklik == 1){
    pytanie5.innerHTML="&blk34;";
    odpowiedzukryta5.innerHTML="******(6)"
}
else if(liczbaklik == 2){
    pytanie5.innerHTML="&blk12;";
    odpowiedzukryta5.innerHTML="f*****(6)"
}
else if(liczbaklik == 3){
    pytanie5.innerHTML="&blk14;";
    odpowiedzukryta5.innerHTML="f****y(6)"
}
else if(liczbaklik == 4){
    pytanie5.innerHTML=""
    odpowiedzukryta5.innerHTML=""
    odpowiedz5.style.display = "inline";
    pokazodpowiedz5.innerHTML="";
}

});


const pytanie6 = document.getElementById("pytanie6");
const odpowiedz6 = document.getElementById("odpowiedz6");
const pokazodpowiedz6 = document.getElementById("pokazodpowiedz6");
odpowiedzukryta6 = document.getElementById("odpowiedzukryta6");
pytanie6.addEventListener("click", function(event){
event.preventDefault();
liczbaklik++;
if(liczbaklik == 1){
    pytanie6.innerHTML="&blk34;";
    odpowiedzukryta6.innerHTML="******(6)"
}
else if(liczbaklik == 2){
    pytanie6.innerHTML="&blk12;";
    odpowiedzukryta6.innerHTML="h*****(6)"
}
else if(liczbaklik == 3){
    pytanie6.innerHTML="&blk14;";
    odpowiedzukryta6.innerHTML="h****x(6)"
}
else if(liczbaklik == 4){
    pytanie6.innerHTML=""
    odpowiedzukryta6.innerHTML=""
    odpowiedz6.style.display = "inline";
    pokazodpowiedz6.innerHTML="";
}

});





















