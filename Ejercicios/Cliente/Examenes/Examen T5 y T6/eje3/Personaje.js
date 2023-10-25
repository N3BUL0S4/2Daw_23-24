class Personaje {
    constructor(nombre, vida, dinero) {
        this.nombre=nombre;
        this.vida=vida;
        this.arma= new Item();
        this.defensa= new Item();
        this.dinero=dinero
    }

    asignarArma(arma) {
        if (arma.tipo=="ataque"){
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
                if (item.potecia>this.arma.potecia) {
                    
                    this.asignarDefensa(item); 
                }
            } else if (item.tipo="ataque") {
                if (item.potecia>this.defensa.potencia) {
                this.asignarArma(item);
                }
            }   
        }
    }

    mostrarPersonaje() {
        document.write("Nombre: "+this.nombre+"<br>Vida: "+this.vida+"<br>Arma: <br>"+this.arma.coste.toString+"<br>Defensa: <br>"+this.defensa.toString+"<br>Dinero: "+this.dinero);
    }
}   
