
let miesiac = Math.floor(Math.random() * 15) + 1;
let kwartał = "";
switch (miesiac) {
    case 1:
    case 2:
    case 3:
        kwartał = "I kwartał";
        break;
    case 4:
    case 5:
    case 6:
        kwartał = "II kwartał";
        break;
    case 7:
    case 8:
    case 9:
        kwartał = "III kwartał";
        break;
    case 10:
    case 11:
    case 12:
        kwartał = "IV kwartał";
        break;
    default:
        kwartał = "Błędny numer miesiąca";
}
document.getElementById("miesiac").innerHTML = miesiac;
document.getElementById("kwartal").innerHTML = kwartał;
