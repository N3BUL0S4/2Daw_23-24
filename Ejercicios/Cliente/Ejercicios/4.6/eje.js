let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 1;

for (let i = 0; i < 1000; i++) {
    num1 = num2;
    num2 = num3;
    num3 = num4;
    num4 = (num1 + num2 + num3) - num4;
    document.write(num4);
}