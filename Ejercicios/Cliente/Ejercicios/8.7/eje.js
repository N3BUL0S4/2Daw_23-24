document.querySelector("#jugar").addEventListener("click", function (ev) {
    
    let elec=document.querySelector("#elec").value
    let num =document.querySelector("#number").value
    let numM=Math.round(Math.random()*5)+0
    
    let resultado="";
    let salida="";
    
    if (num > 5 || num < 0) {
        alert("El numero no puede ser mayor que 5 o menor que 0")
        ev.preventDefault()
        return;
    }
    
    if ((num+numM)%2 == 0) {
        resultado = "Pares"
    } else {
        resultado = "Nones"
    }
    
    document.querySelector("#elecM").value=numM

    if (elec == resultado) {
        document.querySelector("#salida").className="GanaJugador";
        salida =`<h1>Has ganado jefe</h1>`
    } else {
        document.querySelector("#salida").className="GanaMaquina";
        salida =`<h1>Has perdido puto malo de mierda</h1>`;
    }
    document.querySelector("#salida").innerHTML=salida;
})