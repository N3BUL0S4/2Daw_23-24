const contacto=[]
function listar () {
    let salida=``
    contacto.forEach(a => {
        salida += `        
            <div>
            <h3>${a.nombre}</h3>
            <h5>${a.telefono}</h5>
            <h6>${a.gmail}</h6>
            </div>`
    });
    document.querySelector(".scontactos").innerHTML=salida
}
document.querySelector("#boton").addEventListener("click", function (ev) {
    const obj={
        nombre:document.querySelector("#name").value,
        telefono:document.querySelector("#telefono").value,
        gmail:document.querySelector("#gmail").value  
    }
    document.querySelector("#name").value=="",
    document.querySelector("#telefono").value=="",
    document.querySelector("#gmail").value=="" 
    if (obj.nombre == "" ) {
        alert("El nombre bobo")
        ev.preventDefault();
        return
    }
    if (obj.telefono == "") {
        alert("EL telefono boby")
        ev.preventDefault();
        return
    }
    
    alert(obj.nombre+obj.telefono+obj.gmail);
    contacto.push(obj);
    listar();
})