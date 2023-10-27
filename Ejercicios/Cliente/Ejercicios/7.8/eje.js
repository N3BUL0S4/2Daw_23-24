function escribe100() {
    let salida="";
    for (let i = 1 ; i <= 100 ; i++){
    salida += `${i} Ruben sanchez <br/>`;
    }
    document.querySelector("#salida").innerHTML=salida;
}