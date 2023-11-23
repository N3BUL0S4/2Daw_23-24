/*
Un número defectivo o deficiente es un número natural que es mayor que la suma de sus divisores propios exceptuándose a sí mismo.

Ejemplo: 7 es defectivo, ya que los divisores de 7 (exceptuando el 7) son 1 à por tanto el número es mayor que la suma de sus divisores, por lo que es defectivo.
Ejemplo 4 es defectivo, ya que sus divisores son 1,2 à 1+2=3 à 4 >3 à por tanto, es defectivo
Ejemplo 20 no es defectivo, ya que sus divisores son: 1,2,4,5,10 à 1+2+4+5+10=22 à 20 <22 à no defectivo
 Hacer una función que devuelva true o false en caso de que un número pasado por parámetro sea defectivo o no.

Mostar por pantalla del 1 al 10.000 solo aquellos números que son defectivos o deficientes. Solo mostrará los defectivos, los que no lo son no deben mostrarse.
*/ 

let num = 7; 

function isDefectivo(num) {

let suma = 0;
for (var i = 0; i < num ; i++) {

    if (num % i == 0) {
        suma += i;
    }
}
    if (suma < num) {
        return true;
    } else {
        return false;
    }
}

for (var i = 1; i <= 10000; i++) {
    if (isDefectivo(i)) {
        document.write(i);
    }
}