let palabra = "murcia";
let pista = "provincia de españa"
aorcado(palabra,pista)


function aorcado(palabra, pista) {
    let Intentos=5;
    let cont=0;
    alert("Pista: "+pista+", Te quedan "+(Intentos-cont)+" Intentos");
    const arrPa1=palabra.split("");
    const arrPa2=[]
    for (const iterator of arrPa1) {
        arrPa2.push("_");
    }
    let letra="a";

    do{
        letra=prompt("Introduce una letra: ");
        let num=arrPa1.indexOf(letra);
        if (num<=-1){
            arrPa2[num]=letra;
            let solucion=arrPa2.join("");            
            if (palabra == solucin) {
                alert("El puto amooooo tio!!!!!!")
                break;
            }
        } else {
            alert("bobooooo")
            cont++;
        }
    } while (cont<Intentos);

}