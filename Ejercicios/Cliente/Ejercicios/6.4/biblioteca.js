const arrBiblioteca = []

const libro1=new Libro();
libro1.insertaLibro();
arrBiblioteca.push(libro1);

const libro2=new Libro();
libro2.insertaLibro();
arrBiblioteca.push(libro1);

const libro3=new Libro();
libro2.insertaLibro();
arrBiblioteca.push(libro1);

console.log(arrBiblioteca);
console.table(arrBiblioteca);