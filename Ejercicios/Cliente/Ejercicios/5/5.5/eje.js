
arrNotas=[1,2,3];
document.write(media(arrNotas));



function media(arrNotas) {
    let media=0;
    let i=0;
    for (const n of arrNotas) {
        media += n;
        i++;
    }
    media = media/i;
    return media;
}

console.log(primitiva());
function primitiva(){
    const nPrimitiva = new Set();
    do {
        nPrimitiva.add(Math.round(Math.random()*48)+1);
    } while (nPrimitiva.size<6);

    return nPrimitiva;
}