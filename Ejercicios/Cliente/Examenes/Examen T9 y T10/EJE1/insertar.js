personas=[]
document.querySelector("#boton").addEventListener("click",function() {
    persona= {
        name:document.querySelector("#name").value,
        category:document.querySelector("#category").value,
        nameEMP:document.querySelector("#nameEMP").value,
        level:document.querySelector("#level").value
    }

    personas.push(persona)
    insertaPersona(personas)   
    
    console.log(persona)
});

function insertaPersona(personas) {
    url="https://examen-a6a3f-default-rtdb.europe-west1.firebasedatabase.app/rsg.json"
    datosJSON=JSON.stringify(personas)
    console.log(datosJSON)
    fetch(url, {
        method:'PUT',
        body: datosJSON,
        headers: {
            'Content-Type':'application/json'
        },
    })
    .then(datatype=>datatype.json())
    .then(response => {
         console.log(response);
     });   
}