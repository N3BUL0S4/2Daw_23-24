document.querySelector("#jugar").addEventListener("click", function (ev) {
    let elec=document.querySelector("#elec").value
    let num =document.querySelector("#number").value
    let numM=Math.round(Math.random()*4)+1
    let resultado="";
    if (elec>5 || elec<0) {
        alert("El numero no puede ser mayor que 5 o menor que 0")
        ev.preventDefault()
    }
    if ((num+numM)/2==0) {
        resultado="pares";
    } else {
        resultado="nones"
    }
    if (elec == resultado) {
        `<h1>`
    }
})