const item1= new Item("Espada Magica",10,"ataque",40);
const item2= new Item("Hacha Elfica",20,"ataque",42);
const item3= new Item("Escudo negro",10,"defensa",20);
const item4= new Item("Escudo azul",15,"defensa",25);

const pj1= new Personaje("Vladimir el tuerto",100,200);
const pj2= new Personaje("Eldelbar hans",150,200);

pj1.asignarArma(item2);
pj1.asignarDefensa(item4);

pj2.asignarArma(item1);
pj2.asignarDefensa(item3);

pj1.mostrarPersonaje();
pj2.mostrarPersonaje();
