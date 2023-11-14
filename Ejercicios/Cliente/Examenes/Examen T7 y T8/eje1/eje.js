const suscripciones = []
document.querySelector("#boton").addEventListener("click", function () {
    objPlat = {
        idPlat:document.querySelector("#idPlat").value,
        plat:document.querySelector("#plat").value,
        tiempo:document.querySelector("#tiempo").value,
        pvp:document.querySelector("#pvp").value,
        enlace:document.querySelector("#enlace").value
    }
    suscripciones.push(objPlat)
    mostrarSuscripciones();
})

function mostrarSuscripciones() {
    let salida = `
<table>
    <thead>
        <th>ID Plataformma</th>
        <th>Plataforma</th>
        <th>Tiempo</th>
        <th>Precio</th>
        <th>Enlace</th>
    </thead>
    <tbody>`
    suscripciones.forEach(a => {
        salida += ` <tr>
        <td>${a.idPlat}</td>
        <td>${a.plat}</td>
        <td>${a.tiempo}</td>
        <td>${a.pvp}</td>
        <td>${a.enlace}</td>
        <td><button onclick="eliminarSuscripcion(${a.idPlat})">Eliminar</button></td>
        </tr>`
    });

    salida += `</tbody>
    </table>`

    document.querySelector("#salida").innerHTML=salida
}

function eliminarSuscripcion(idPlat) {
    for (let i = 0; i < suscripciones.length; i++) {
        const a = suscripciones[i];
        if (a.idPlat==idPlat){
            suscripciones[i]=""
        }

    }
    console.log(idPlat)
    mostrarSuscripciones();
}