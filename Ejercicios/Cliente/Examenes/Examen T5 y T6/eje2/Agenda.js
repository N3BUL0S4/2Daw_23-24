class Agenda {
    constructor() {
        this.agenda = [];
    }

    aniadirContacto(cont){
        this.agenda.push(cont);
    }

    listarContactos() {
        for (const conn of this.agenda) {
            document.write("<br>");
            conn.mostrarContacto();
        }
    }

    buscaContacto(nombre) {
        for (const con of this.agenda) {
            if(con.nombre == nombre) {
                document.write(con.mostrarTelefono());
            }
        }
    }
}