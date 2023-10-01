const arr1=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const arr2=['c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b'];

let texto = "hola";

document.write(cifrarCesar(texto));
function cifrarCesar(texto){ 
    const textoArr=texto.split("");

    let salida="";
    for (const elemento of textoArr) {
        let posicion = arr2.indexOf(elemento);
        salida+=arr1[posicion];
    }
    return salida;
}

document.write(descifrarCesar(texto));
function descifrarCesar(texto){ 
    const textoArr=texto.split("");

    let salida="";
    for (const elemento of textoArr) {
        let posicion = arr1.indexOf(elemento);
        salida+=arr2[posicion];
    }
    return salida;
}