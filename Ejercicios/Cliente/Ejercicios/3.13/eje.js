let num=0;
let nums=0;
let suma=0;
num=Number(prompt("Ingrese un numero"));

while (num > 0) {
    num = Number(prompt("Ingrese un numero"));
    suma = suma + num;
    nums++;
}
document.write( suma/nums );