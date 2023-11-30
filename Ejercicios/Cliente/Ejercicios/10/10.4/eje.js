
fetch("https://api.giphy.com/v1/gifs/trending?api_key=fAJWRf6y2IJdG2ZrcUb91bDbiUijRueB")
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