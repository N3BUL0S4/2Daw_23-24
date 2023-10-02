let num1 = Math.round(Math.random() * 9)+1;
let num2 = Math.round(Math.random() * 9)+1;
let num3 = Math.round(Math.random() * 9)+1;

comprobarPremio(num1, num2, num3);

function comprobarPremio(num1, num2, num3) {
    if (num1 == num2) {
        if (num1 == num3) {
            alert("Ganaste 500 Leuros");
        } else {
            alert("Ganaste 100 Leuros");
        }
    } else if (num2 == num3) {
        alert("Ganaste 100 Leuros");
    } else if (num1 == num3) {
        alert("Ganaste 100 Leuros");
    } else {
        alert("Siga buscando, pardillo");
    }
}
