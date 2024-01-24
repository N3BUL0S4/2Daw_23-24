$(document).ready(function () {
    
    $.ajax({
        type: "GET",
        url: "https://pixabay.com/api/",
        data: {
            "key":"20446055-86e5aac963e9ed03555d0f343"
        },
        dataType: "JSON",
        success: function (response) {
            console.log(response.hits)
        }
    });
});

async function peticion() {
    const datatype= await fetch(url);
    const response= await datatype.json()
     console.log(response);

}

peticion(); 

document.querySelector("#boton").addEventListener("click",function() {
    
    fetch(url)
        .then(datatype=>datatype.json())
        .then(response => {
             console.log(response);
    
         });

});