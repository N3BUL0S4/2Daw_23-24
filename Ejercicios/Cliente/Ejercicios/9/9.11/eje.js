document.querySelector("#boton").addEventListener("click", function() {
    const datosJSON=JSON.stringify({
        title:document.querySelector("#title").value
    })
    const url="https://dummyjson.com/products/add"
    document.querySelector("#id1").value
    fetch(url, {
        method:'POST',
        body: datosJSON,
        headers: {
            'Content-Type':'application/json'
        },
    })
        .then(datatype=>datatype.json())
        .then(response => {
             console.log(response);
    
         });
})