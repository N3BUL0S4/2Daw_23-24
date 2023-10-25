class Item{
    constructor(nombre, coste, tipo, potencia){
        this.nombre=nombre;
        this.coste=coste;
        this.tipo=tipo;
        this.potencia=potencia;
    }

    toString() {
        return "Nombre: "+this.nombre+"<br>Coste: "+this.coste+"<br>Tipo: "+this.tipo+"<br>Potencia: "+this.potencia;
    }
}