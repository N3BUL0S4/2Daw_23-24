class Contacto{

    constructor() {
        this.nombre = "";
        this.telefono = "";
    }

    crearContacto(nombre, telefono) {
        this.nombre=nombre;
        this.telefono=telefono;
    }

    mostrarTelefono() {
        return this.telefono;
    }

    mostrarContacto(){
        document.write("Nombre: "+this.nombre+" Telefono: "+this.telefono);
    }
}