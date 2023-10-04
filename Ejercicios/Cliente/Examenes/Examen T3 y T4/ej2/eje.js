num1=2;
num2=1;
num3=0;

document.write("1 ->"+num1+", <br>");
document.write("2 ->"+num2+", <br>");
for (let i = 3; i <= 100 ; i++){
    num3 = num1+num2;
    document.write(i+" -> "+num3+" "+num1+"+"+num2+"<br>");
    num1= num2;
    num2= num3;
    
}
