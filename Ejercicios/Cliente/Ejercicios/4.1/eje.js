let num;
do{
    num = Number(prompt('Escribe um número: '));
} while (num <= 1);

document.write(num+",");

while (num > 1) {
    if (num % 2 == 0) { 
        num=num/2;
    } else { 
        num=3*num + 1;
    }
    
    document.write(num);
    
    if (num != 1) {
        document.write(",");
    }
}