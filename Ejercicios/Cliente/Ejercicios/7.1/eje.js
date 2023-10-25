function esPar(){
    let num = document.getElementById("num").value;
    if (num % 2==0) {
        alert("Es par");
    } else {
        alert("No es par");
    }
}
function esImpar(){
    let num = document.getElementById("num").value;
    if (!num % 2==0) {
        alert("Es impar");
    } else {
        alert("No es impar");
    }
}
