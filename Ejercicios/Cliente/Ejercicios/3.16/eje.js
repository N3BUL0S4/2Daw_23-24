let num1=0;
let num2=1;

function sum(num1,num2){
    return num1+num2;
}

document.write(num1+", ",num2+", ");

for (let i = 0 ; i <= 20 ; i++){
    let num3=sum(num1,num2);
    num1=num2;
    num2=num3;
    document.write(num3+", ");
}