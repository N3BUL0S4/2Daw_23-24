let frase = "";
document.write("teta")
frase = prompt("Escribe una frase con un palidromo (palabra a palabra)");

palindromo(frase);

function palindromo(frase) {
    const fraseArr=[];
    fraseArr.pusham,(frase.split(" "));
    let pala1, pala2;
    pala1 = frase[1];
    pala2 = frase[3];



    if (pala1 == pala2) {
        return true;
    }
    return false;
}

function reverse(pala) {

    arr=[];
    let solucion = "";

    arr.push(pala.split(""));

    for (let i=arr.length(); i>0; i--) {
        solucion = solucion+arr[i];
    }
    document.write(solucion);
    return solucion;
}