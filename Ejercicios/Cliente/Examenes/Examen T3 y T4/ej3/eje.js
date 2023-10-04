
let num1 = 3;
let num2 = 7;

if (gemelos(num1,num2) == true) {
    document.write(num1+" y "+num2+" Son gemelos");
} else {
    document.write(num1+" y "+num2+" No son gemelos");
}

function gemelos(a,b){
    if (!esPrimo(a)) {
        return false;    
    } 
    if (!esPrimo(b)){
        return false;
    }  
    if (a-b==2 || b-a==2){
        return true;
    } else {
        return false;
    }
    
        
    
}

function esPrimo(n){
    x=0;
    for (let i=1;i<n;i++){
        if (n%i==0)
        x++;
    }

    if (x==1) {
        return true;
    }
    return false;
}
