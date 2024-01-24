personas=[]
persona=rellenaArray()
console.log(personas)
salida=""
personas.forEach(e => {
    salida=salida+`
    <div class="col">
    <div class="card">
        <div class="card-body">
        <h1 class="card-title">${e.name}</h1>
        <h2 class="card-texts">${e.category}</h2>
        <h4 class="card-texts">${e.nameEMP}</h4>
        <h4 class="card-texts">${e.level}</h4>
        </div>
    </div>
    </div>`
});
document.querySelector("#salida").innerHTML=salida

async function rellenaArray() {
    url="https://examen-a6a3f-default-rtdb.europe-west1.firebasedatabase.app/rsg.json"
    let respuesta = await fetch(url)
    let response = await respuesta.json() 
        console.log(response)
        return response
}