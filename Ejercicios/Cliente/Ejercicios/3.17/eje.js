

function triangularS(num) {
    let numS=0;
    while (true){
        numS++;
        let sum=0;
        for (let i = 0 ; sum > num; i++){
            sum+=i;
        }
        if (sum == num){
            return numS;
        }
    }
}

function triangularI (num) {
    let numI=0;
    while (true){
        numI++;
        let sum=0;
        for (let i = 0 ; sum > num; i++){
            sum+=i;
        }
        if (sum == num){
            return numI;
        }
    }
}

let numero=0;
numero=Number(prompt("Ingrese un numero"));
document.write("hola");
document.write(triangularI(numero));
document.write(triangularS(numero));
let sum=0;
let i=0;

while (sum < numero) {
    i++;
    sum+=i;
}



if (sum == numero){
    document.write("Es Triangular");
} else {
    document.write("No es Triangular, ");
    document.write("Mayor: "+triangularS(numero));
    document.write("Menor: "+triangularI(numero));

}
