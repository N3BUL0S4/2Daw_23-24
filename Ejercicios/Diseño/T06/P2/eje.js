
    colores = ["naranja", "rojo", "azul", "verde", "amarillo"]
    c1= Math.round(Math.random()* 4)
    c2=0
    do {c2= Math.round(Math.random()* 4)} while (c1==c2)
    document.querySelector("#dentro").addEventListener("click", function(e) {
        Dentro()
        e.stopPropagation()
    })

    function Dentro() {
        if (Number(c1)==Number(c2-1)) {
            fuera()
        }
        if (c1 > 4) {c1=0}
        document.querySelector("#dentro").className=colores[c1++]
        console.log("Dentro* "+c1+" / "+c2+" Fuera")
    }

    document.querySelector("#fuera").addEventListener("click", function(e) {
        fuera()
        e.stopPropagation();

    })
    function fuera() {
        if (c2 > 4) {c2=0}
        document.querySelector("#fuera").className=colores[c2++]
        console.log("Dentro "+c1+" / "+c2+" Fuera*")
    }
