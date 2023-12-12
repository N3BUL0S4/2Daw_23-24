document.querySelector("#boton").addEventListener("click",function() {
    
    const obj={
        name:document.querySelector("#name").value,
        job:document.querySelector("#job").value
    }
    const datosJSON=JSON.stringify(obj)
    let url="https://reqres.in/api/users"
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
            let salida=`
            Id: ${response.id}<br/>
            Name: ${response.name}<br/>
            Job: ${response.job}<br/>
            CreatedAt ${response.createdAt}`
            document.querySelector("#salida").innerHTML=salida
        });
})