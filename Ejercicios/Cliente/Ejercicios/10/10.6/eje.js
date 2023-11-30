

document.querySelector("#boton").addEventListener("click",function () {
    
    let buscar=document.querySelector("#buscar").value

    if(buscar=="" || buscar=="null"){
        alert("Gilipuertas")
        return false;
    }
    let url = "https://api.giphy.com/v1/gifs/search"
    url += "?api_key=fAJWRf6y2IJdG2ZrcUb91bDbiUijRueB"
    url += "&q="+buscar
    console.log(url)
    
    fetch(url)
    .then(datatype=>datatype.json())
    .then(response=> {
        console.log(response.data)
        let salida=""
        response.data.forEach(a => {
            salida+=`<div>
            <img src="${a.images.fixed_height.url}">
            </div>`        
        });
        document.querySelector("#salida").innerHTML=salida
})
})