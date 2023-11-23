let num = Number(prompt('Digite um número: '));
let contP=0;

for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        contP++;
    }
}

if (contP == 2) {
    document.write("El número " + num + " es primo!"); 
} else {
    document.write("El número " + num + " no es primo!");
}

