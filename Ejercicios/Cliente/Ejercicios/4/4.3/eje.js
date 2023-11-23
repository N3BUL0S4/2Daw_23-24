/*

Crear un programa en JavaScript que sea un rellenador de boletos de la primitiva.

Cada apuesta consistirá en 6 números entre 1 y 49 en la que habremos de evitar la posibilidad de que un número se repita dos veces.

Una vez conseguido esto repetir este proceso para un boleto entero (para las 8 apuestas en total de las que consta un boleto)

*/

let num;
let num1 = 0 , num2 = 0, num3 = 0, num4 = 0, num5 = 0, num6 = 0;
for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 6; j++) {
        do{
        num  = Math.round(Math.ramdom()*48)+1;
        }while (num != num1 && num!= num2 && num!= num3 && num!= num4 && num!=num5 && num!= num6);
        if (num1 == 0){
            num1 = num;
        }else if (num2 == 0){
            num2 = num;
        }else if (num3 == 0){
            num3 = num;
        }else if (num4 == 0){
            num4 = num;
        }else if (num5 == 0){
            num5 = num;
        }else if (num6 == 0){
            num6 = num;
        }
    } 
    document.write(num1 + " | " + num2 + " | " + num3 + " | " + num4 + " | " + num5 + " | " + num6 + "<br>");
    num1 = 0; num2 = 0; num3 = 0; num4 = 0; num5 = 0; num6 = 0;
}