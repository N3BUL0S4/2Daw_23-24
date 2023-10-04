function validarContraseña(contra) {
    const contraArrs = contra.split("");
    if (contraArrs.length < 8) {
        return false;
    }
    if (!validarMayusculas(contraArrs)) {
        return false;
    }
    if (!validarNumeros(contraArrs)) {
        return false;
    }
}

function validarMayusculas(contraArrs) {
    let valido=false
    for (const letra of contraArrs) {
        if (letra.toUpperCase() == letra ) {
            valido=true;
        }
    }
    return valido;
}

function validarNumero(contraArrs) { 
    valido=false;
    for (const letra of contraArrs) {
        if (letra.isNumber()) {
            valido=true;
        }
    }
}    