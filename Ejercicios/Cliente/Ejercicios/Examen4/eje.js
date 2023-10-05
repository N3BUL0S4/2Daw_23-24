function pedirAltura(){
    let a=0;
    do {
    a=Number(prompt("Escribe la altura de la ª persona:"))
    } while (a<0 || a>3);
    return a
}
function Altura(numP){
    let arrAlt=[];
    for (let i = 1; i <=numP; i++ ){
        arrAlt.push(pedirAltura())
    }
    let media=0;
    let i=0;
    for (const a of arrAlt) {
        media+=a
        i++;
    }
    media=media/i
    let pE;
    let pD;
    for (const a of arrAlt) {
        if (a>media) {
            pE++;
        } else if (a<=media) {
            pD++;
        }
        
    }
    document.write("Media de alturas: "+media+"<br>");
    document.write("Numero de personas con altura mayor que la media: "+pE+"<br>");
    document.write("Numero de personas con altura menor o igual que la media: "+pD+"<br>");
}

Altura(3);