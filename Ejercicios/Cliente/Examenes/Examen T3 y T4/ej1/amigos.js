pideDatos();

function esDivisor(n1,n2){

    if (n1%n2==0){
        return true;
    } 
    return false 
    
}

function SonAmigos(a,b){

    let sumaA=0;
    let sumaB=0;

    for (let i=1;i<a;i++){
        if (esDivisor(a,i)){
            sumaA+=i;
        }
    }

    for (let i=1;i<b;i++){
        if (esDivisor(b,i)){
            sumaB+=i;
        }
    }

    if (sumaA==b && sumaB==a){
        return true;
    }
    return false;
    
}

function pideDatos(){
    let num1 = Number(prompt("Escribe un numero: "));
    let num2 = Number(prompt("Escribe otro numero: "));

    if (SonAmigos(num1,num2)){
        document.write(num1+" y "+num2+" Son amigos");
    } else {
        document.write(num1+" y "+num2+" No son amigos");
    }
}