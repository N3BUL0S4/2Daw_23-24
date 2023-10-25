const con1 = new Contacto();
const con2 = new Contacto();
const con3 = new Contacto();
const agenda = new Agenda();

con1.crearContacto("Federico","123");
con2.crearContacto("Perico","321");
con3.crearContacto("Gines","666");

agenda.aniadirContacto(con1);
agenda.aniadirContacto(con2);
agenda.aniadirContacto(con3);

agenda.listarContactos();

document.write("<br>");
agenda.buscaContacto(con1.nombre);
document.write("<br>");
agenda.buscaContacto(con3.nombre);

