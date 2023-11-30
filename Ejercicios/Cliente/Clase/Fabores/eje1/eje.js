document.querySelector("#boton").addEventListener("click", function () {

fetch("")
.then(datatype=>datatype.json())
.then(response=> {
    console.log(response)
})

})