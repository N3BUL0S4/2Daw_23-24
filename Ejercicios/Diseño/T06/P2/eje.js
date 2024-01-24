    // creo el array e inicializo los colores de manera random del 0 al 4
    colores = ["naranja", "rojo", "azul", "verde", "amarillo"]
    c1= Math.round(Math.random()* 4)
    c2=0
    do {c2= Math.round(Math.random()* 4)} while (c1==c2)
    c3=0
    do {c3= Math.round(Math.random()* 4)} while (c2==c3)
    // Aqui llamo a las funciones para que nada mas cargar la pagina se coloreen con los primeros colores
    Dentro()
    medio()
    fuera()
    //hago las tres llamadas de eventos por separado para poder llamar a las funciones mas facil desde otra funcion
    document.querySelector("#dentro").addEventListener("click", function(e) {
        Dentro()
        e.stopPropagation()
    })

    document.querySelector("#medio").addEventListener("click", function(e) {
        medio()
        e.stopPropagation();

    })

    document.querySelector("#fuera").addEventListener("click", function(e) {
        fuera()
        e.stopPropagation();

    })
    //Esta funciones son practicamente iguales 
    function Dentro() {
        // aqui compruebo que el numero no se pase de el largo del array y lo vuelvo al inicio del array cuando se pase 
        if (c1 > 4) {c1=0}
        // aqui compruebo que el anterior sea igual al siguiente y avanzo 1 el siguiente 
        if (Number(c1)==Number(c2-1) || c1==5 && c2==0 ) {
            medio()
        }
        console.log(c1+" Dentro* / "+c2+" Medio / "+c3+" Fuera")
        //ago la llamada para cambiar el color
        document.querySelector("#dentro").className=colores[c1++]
    }

    //en esta funcion lo unico que cambia es que comprueba que no sea igual al anterior y al siguiente
    function medio() {
        if (c2 > 4) {c2=0}
        // comprueba que no sea igual al anterior no se por que pero si no es asi no funcion y no tiene sentido
        if(Number(c1-1)==Number(c2)) {c2++}
        // comprueba que sea igual al siguiente y lo empuja 1
        if (Number(c2)==Number(c3-1) || (c2==5 && c3==0)) {
            fuera()
        }
        document.querySelector("#medio").className=colores[c2++]
        console.log(c1+" Dentro / "+c2+" Medio* / "+c3+" Fuera")
    }

    // en esta funcion no comprueba si hay siguiente porque no hay
    function fuera() {
        if (c3 > 4) {c3=0}
        if (Number(c2-1)==Number(c3)) {c3++}
        document.querySelector("#fuera").className=colores[c3++]
        console.log(c1+" Dentro / "+c2+" Medio / "+c3+" Fuera*")
    }
