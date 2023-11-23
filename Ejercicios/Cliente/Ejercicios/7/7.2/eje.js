function sumar() {
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let solucion = Number(num1)+Number(num2);

    alert(solucion);
}

function restar() {
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let solucion;

    if (num1>num2) {
        solucion=num1-num2;
    } else {    
        solucion=num2-num1;
    }
    alert(solucion);
}

function multi() {
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let solucion = num1*num2;

    alert(solucion);
}

function divid() {
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let solucion;

    if (num1>num2) {
        solucion=num1/num2;
    } else {    
        solucion=num2/num1;
    }
    alert (solucion);
}

