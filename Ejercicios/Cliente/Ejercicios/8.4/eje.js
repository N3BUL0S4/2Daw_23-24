const lineaFactura = [];
document.querySelector("#Insert").addEventListener("click",function (ev) {
    let productoDOM=document.querySelector("#producto").value;
    let cantidadDOM=Number(document.querySelector("#cantidad").value);
    let precioDOM=Number(document.querySelector("#precio").value);
    if (productoDOM=="" || cantidadDOM==0 || precioDOM==0) {
        alert("Todos los campos deben estar completos");
        ev.preventDefault();
    } else {
    const obj={
        producto:productoDOM,
        cantidad:cantidadDOM,
        precio:precioDOM
    }
        lineaFactura.push(obj);
        console.log(lineaFactura);
        document.querySelector("#producto").value="";
        document.querySelector("#cantidad").value="";
        document.querySelector("#precio").value="";
        alert("cara culo");
    }
})

document.querySelector("#GeneFac").addEventListener("click",function () {
    let salida1=`
    <table>
    <thead>
        <th>Producto</th>
        <th>Cantidad</th>
        <th>Precio</th>
        <th>Subtotal</th>
    </thead>
    <tbody>`; 
    let suma=0;
    lineaFactura.forEach(a => {
        let subtotal=a.precio*a.cantidad;
        suma += subtotal;
        salida1+=`<tr>
            <td>${a.producto}</td>
            <td>${a.cantidad}</td>
            <td>${a.precio}</td>
            <td>${subtotal}</td>
        </tr>`
    })
    salida1+=`</tbody></table>`;
    iva = (suma*21)/100;
    total = suma+iva;
    let salida2=`
        <table>
        <tbody>    
            <tr>
                <th>Base inponible</th>
                <th>IVA</th>
                <th>TOTAL</th>
            </tr>
            <tr>
               <td>${suma}</td>
               <td>${iva}</td>
               <td>${total}</td>
            </tr>
            </tbody></table>`
    document.querySelector("#DetFact").innerHTML=salida1;
    document.querySelector("#PieFact").innerHTML=salida2;
})



