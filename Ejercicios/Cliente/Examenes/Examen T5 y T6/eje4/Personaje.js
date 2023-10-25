class Personaje {
    constructor(nombre, vida, dinero) {
        this.nombre=nombre;
        this.vida=vida;
        this.arma = new Item();
        this.defensa = new Item();
        this.dinero=dinero
    }

    asignarArma(arma) {
        if (arma.tipo=="ataque"){
            document.write("<b>"+arma.toString()+"</b>");
            this.arma=arma;
        }
    }

    asignarDefensa(defensa) {
        if (defensa.tipo=="defensa"){
            this.defensa=defensa;
        }
    }

    levear() {
        if (dinero>2) {
            dinero = dinero-2
            vida+=5;
        }
    }

    farmear(item) {
        if (item.coste<dinero) {
            if (item.tipo=="defensa"){
                if (item.potecia>this.defensa.potecia) {
                    
                    this.asignarDefensa(item); 
                }
            } else if (item.tipo="ataque") {
                if (item.potecia>this.arma.potencia) {
                    this.asignarArma(item);
                }
            }   
        }
    }

    mostrarPersonaje() {
        document.write("Nombre: "+this.nombre+"<br>Vida: "+this.vida+"<br>Arma: <br><br>"+this.arma.toString()+"<br>Defensa: <br><br>"+this.defensa.toString()+"<br><br>Dinero: "+this.dinero+"<br><br>");
    }
}   
