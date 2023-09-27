let num;
do {
    num = prompt("Enter a number");
} while (num <= 0);


document.write(abundante(num));
function abundante(num) {
let sum = 0;
    for (let i = 0; i < num; i++) {
        if (num % i == 0) {
            sum = sum + i;
        }
    }   
    return (sum > num);
}

