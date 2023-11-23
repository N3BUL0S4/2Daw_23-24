function cartas() {
    const cartas = new Set();
    do {
        let ale = Math.round(Math.random()*19)+1;
        cartas.add(ale);
    } while (cartas.size<4);

    let resultado="";
    for (let a of cartas) {
        let salida=a+".jpg";
        console.log(salida);
        resultado+="<img src='cartas/"+salida+"'>"
    }

    document.querySelector("#salida").innerHTML=resultado;
}