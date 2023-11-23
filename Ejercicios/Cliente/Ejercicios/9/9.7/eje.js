$(document).ready(function () {
    });(function () { 
        $.ajax({
            type: "GET",
            url: "https://swapi.dev/api/films/",
            data: "data",
            dataType: "JSON",
            success: function (response) {
                console.log(response.result)
                response.result.forEach(a => {
                    
                });
            }
    });
});