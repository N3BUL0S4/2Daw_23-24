let ran = Math.round(Math.random()*49)+1;
let num=0;


for (let i = 1; i <= 4; i++ ){
    num = Number(prompt("Escribe un numero del 1 al 50"));
    if (ran == num) {
        break;
    } 
    if (num>ran) {
        alert("Tu numero es mas grande <br>");
    } else {
        alert("Tu numero es mas pequeño <br>");
    }
}

if (ran==num){
    alert("Eres un adivinador/a nato/a")
} else {
    alert("No encontrarías el número, aunque lo tuvieras delante");
}