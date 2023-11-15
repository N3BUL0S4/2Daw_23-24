const arrVinos=[]

document.querySelector("#salida").innerHTML="";

document.querySelector("#boton").addEventListener("click",function () {
    const vino={
        nombre:document.querySelector("#nombre").value,
        pvp:documento.querySelector("#pvp").value
    }

    insertar(vino);

})


function insertar(vino) {
    arrVinos.push(vino)
    console.log(arrVinos)
    mostrar();
    document.querySelector("#nombre").value="";
    document.querySelector("#pvp").value="";

    
}

function mostrar () {
    let salida="";
    arrVinos.forEach(a => {
        salida += `<div>
                <h1>${a.nombre}</h1>
                <img src='vino.jpg'>
                <h3>${a.pvp}</h3>
                </div>`
    });
    document.querySelector("#salida").value=salida
}






// const arrVinos = [];

// function insertar() {
//     const vino={
//         nombre:document.querySelector("#nombre").value,
//         pvp:document.querySelector("#pvp").value}

//     arrVinos.push(vino);
//     console.log(arrVinos);
//     mostrar();
//     document.querySelector("#nombre").value="";
//     document.querySelector("#pvp").value="";
// }

// function mostrar() {
//     let salida="";
//     arrVinos.forEach(a => {
//         salida +=("<div>");
//         salida +=("<h1>"+a.nombre+"</h1>");
//         salida +=("<img src='vino.jpg'>");
//         salida +="<h3>"+a.pvp+"</h3>"
//         salida +="</div>";
//     });
//     document.querySelector("#contenedor").innerHTML=salida;
// }