let num=Number(prompt("Escribe un numero"));

if(num%4==0){
    if(num%100==0){
        if(num%400==0){
            document.write("Es Bisiesto"+num);
        }else{
            document.write("No es Bisiesto"+num);
        }
    } else {
        document.write("Es Bisiesto"+num);
    } 
}else{
    document.write("No es Bisiesto"+num);
}