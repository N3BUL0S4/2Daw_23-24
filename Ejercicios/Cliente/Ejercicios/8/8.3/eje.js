const lineaFactura = [];
document.querySelector("#boton").addEventListener("click",function () {
    let productoDOM=document.querySelector("#procuto").value;
    let cantidadDOM=Number(document.querySelector("#cantidad").value);
    let precioDOM=Number(document.querySelector("#precio").value);
    const obj={
        producto:productoDOM,
        cantidad:cantidadDOM,
        precio:precioDOM
    }
    lineaFactura.push(obj);
    console.log(lineaFactura);
    document.querySelector("#procuto").value="";
    document.querySelector("#cantidad").value="";
    document.querySelector("#precio").value="";
    alert("cara culo")
})
