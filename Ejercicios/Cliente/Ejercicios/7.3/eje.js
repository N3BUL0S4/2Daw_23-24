function vuelta(){
    let texto = document.querySelector("#texto").value;
    document.querySelector("#resultado").value = texto.split('').reverse().join('');
}