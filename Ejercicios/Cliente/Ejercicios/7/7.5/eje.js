function juega() {
    let opJugador = document.querySelector("#op").value;
    
    const juego = ["papel", "tijera", "piedra"];
    
    let opMaquina = Math.round(Math.random()*2);
    
    let sol="";

    if (opJugador == "papel") {
        sol = papel(opMaquina);
    }
    if (opJugador == "tijera") {
        sol = tijera(opMaquina);
    }
    if (opJugador == "piedra") {
        sol = piedra(opMaquina);
    }

    document.querySelector("#maquina").value=juego[opMaquina];
    document.querySelector("#sol").innerHTML="<h1>"+sol+"</h1>";
}   

function papel(opMaquina) {
    if (opMaquina == 0) {
        return "Empate"
    }
    if (opMaquina == 1 ) {
        return "Gana la Maquina"
    }
    if (opMaquina == 2) {
        return "Gana el Jugador"
    }
}
function tijera(opMaquina) {
    if (opMaquina == 0) {
        return "Gana el Jugador"
    }
    if (opMaquina == 1 ) {
        return "Empate"
    }
    if (opMaquina == 2) {
        return "Gana la Maquina"
    }
}
function piedra(opMaquina) {
    if (opMaquina == 0) {
        return "Gana la Maquina"
    }
    if (opMaquina == 1 ) {
        return "Gana el Jugador"
    }
    if (opMaquina == 2) {
        return "Empate"
    }
}