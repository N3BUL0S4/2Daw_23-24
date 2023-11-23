$(document).ready(function () {
    $("#boton").click(function () { 
        let salida="";
        $.ajax({
            type: "GET",
            url: "https://api.giphy.com/v1/gifs/random",
            data: {
                "api_key" : "fAJWRf6y2IJdG2ZrcUb91bDbiUijRueB"
            },
            dataType: "JSON",
            success: function (response) {
                response.data.forEach(a => {
                    salida += `<div>
                    <img src="${a.images.original.url}" alt="">
                    </div>`
                });
               
            }
            
        });
    });
});