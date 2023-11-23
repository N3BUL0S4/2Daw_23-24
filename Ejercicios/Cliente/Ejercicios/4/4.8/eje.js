/*
Este año para el sorteo de Navidad de la lotería, los niños de San Ildefonso se han infectado todos de COVID-19, y por tanto el sorteo corre el riesgo de ser suspendido.

Como somos el primo listo del organizador del sorteo nos ha pedido ayuda para la realización de este y por tanto vamos a desarrollar un programa que nos permita generar los premios de dicho sorteo.

Los citados premios son los siguientes:

1 primer premio, llamado “el Gordo”, de 4 millones de euros
1 segundo premio, de 1.250.000 € (hay que comprobar que no coincide con el gordo)
1 tercer premio de 500.00 € (hay que comprobar que no coincide con el gordo)
2 cuartos premios con 200.000 € cada uno (hay que comprobar que no coincide con el gordo)
8 quintos premios con 60.000 € cada uno (hay que comprobar que no coincide con el gordo)
1.794 premios de 1000 €
 Como me he quejado a mi primo ya que me ha avisado el día de antes, me indica que para considerar el ejercicio como correcto, no será obligatorio generar los 1.794 premios de la llamada “pedrea”, pero que si los generamos seremos recompensados con un punto extra sobre la nota que obtengamos (siempre y cuando la suma de la nota más el punto no sea superior a 10, en cuyo caso tendremos un 10).
*/

let gordo = Math.round(Math.random()*99998)+1;
let segundo = Math.round(Math.random()*99998)+1;
let tercer = Math.round(Math.random()*99998)+1;
let cuarto1 = Math.round(Math.random()*99998)+1;
let cuarto2 = Math.round(Math.random()*99998)+1;
let quintos1 = Math.round(Math.random()*99998)+1;
let quintos2 = Math.round(Math.random()*99998)+1;
let quintos3 = Math.round(Math.random()*99998)+1;
let quintos4 = Math.round(Math.random()*99998)+1;
let quintos5 = Math.round(Math.random()*99998)+1;
let quintos6 = Math.round(Math.random()*99998)+1;
let quintos7 = Math.round(Math.random()*99998)+1;
let quintos8 = Math.round(Math.random()*99998)+1;

do {
    if (segundo == gordo) {
        segundo = Math.round(Math.random()*99998)+1;
    }
    if (tercer == gordo) {
        tercer = Math.round(Math.random()*99998)+1;
    }
    if (cuarto1 == gordo) {
        cuarto1 = Math.round(Math.random()*99998)+1;
    }
    if (cuarto2 == gordo) {
        cuarto2 = Math.round(Math.random()*99998)+1;
    }
    if (quintos1 == gordo) {
        quintos1 = Math.round(Math.random()*99998)+1;
    }
    if (quintos2 == gordo) {
        quintos2 = Math.round(Math.random()*99998)+1;
    }
    if (quintos3 == gordo) {
        quintos3 = Math.round(Math.random()*99998)+1;
    }
    if (quintos4 == gordo) {
        quintos5 = Math.round(Math.random()*99998)+1;
    }
    if (quintos5 == gordo) {
        quintos5 = Math.round(Math.random()*99998)+1;
    }
    if (quintos6 == gordo) {
        quintos6 = Math.round(Math.random()*99998)+1;
    }
    if (quintos7 == gordo) {
        quintos7 = Math.round(Math.random()*99998)+1;
    }
    if (quintos8 == gordo) {
        quintos8 = Math.round(Math.random()*99998)+1;
    }

} while ( segundo == gordo && tercer == gordo 
    && cuarto1 == gordo && cuarto2 == gordo 
    && quintos1 == gordo && quintos2 == gordo 
    && quintos3 == gordo && quintos4 == gordo 
    && quintos5 == gordo && quintos6 == gordo 
    && quintos7 == gordo && quintos8 == gordo);

document.write("El ganador del gordo es: "+gordo+"<br>");
document.write("El ganador del segundo premio es: "+segundo+"<br>");
document.write("El ganador del tercer premio es: "+tercer+"<br>");
document.write("El ganador de los cuartos premios son: "+cuarto1+", "+cuarto2+"<br>");
document.write("El ganador de los quintos premios son: "+quintos1+", "+quintos2+", "+quintos3+", "+quintos4+", "+quintos5+", "+quintos6+", "+quintos7+", "+quintos8+"<br>");