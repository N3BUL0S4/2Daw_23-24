document.querySelector("#formulario").addEventListener("sumbit", function (ev) {
    const arrNum=['0','1','2','3','4','5','6','7','8','9']
    const arrLet=['A','B','C','D','E','F','G','H','I','J','K','M','N','L','O','P','Q','R','S','T','U','W','Y','Z']
    const arrSerie = (document.querySelector("#numSerie").value).split('')


    let voyBien=true;
    if (arrNum.includes(arrSerie[0])) {voyBien=false}
    if (arrNum.includes(arrSerie[1])) {voyBien=false}
    if (arrNum.includes(arrSerie[2])) {voyBien=false}
    if (arrLet.includes(arrSerie[3])) {voyBien=false}
    if (arrLet.includes(arrSerie[4])) {voyBien=false}
    if (arrSerie[5]!='1' && arrSerie[5]!='2') {voyBien=false}
    

})