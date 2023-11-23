class Libro {
    constructor() {
        this.titulo="";
        this.autor="";
        this.isbn="";
        this.paginas=0;
        this.fechPublic="";
        this.ejemplares=0;
        this.prestados=0;
    }
    insertaLibro() {
        this.titulo=prompt("Introduce titulo: ");
        this.autor=prompt("Introduce autor: ");
        this.isbn=prompt("Introduce isbn: ");
        this.paginas=Number(prompt("Introduce paginas: "));
        this.fechPublic=prompt("Introduce fecha de Publicacion: ");
        this.ejemplares=Number(prompt("Introduce ejemplares: "));
    }
    prestamo() {
        if (this.ejemplares>0){
            this.prestados++;
            this.ejemplares--;
        }
    }

    devolucion() {
        if (this.prestados>0){
            this.prestados--;
            this.ejemplares++;
        }
    }

    MostrarLibro() {
        document.write("Titulo: "+this.titulo);
        document.write("<br>");
        document.write("Autor: "+this.autor);
        document.write("<br>");
        document.write("ISBN: "+this.isbn);
        document.write("<br>");
        document.write("Paginas: "+this.paginas);
        document.write("<br>");
        document.write("Fecha de publicacion: "+this.fechPublic);
        document.write("<br>");
        document.write("Ejemplares: "+this.ejemplares);
    }
}