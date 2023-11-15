const mayusculas= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const minusculas= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
const nums= ['1','2','3','4','5','6','7','8','9']
document.querySelector("#form").addEventListener("submit",function (ev) {

    let passwd = document.querySelector("#passwd").value
    let conpasswd = document.querySelector("#conpasswd").value
    let arrPasswd = passwd.split('')
    let valido=true;
    let mayus=0;
    let minus=0;
    let numeros=0
   if (!passwd==conpasswd) {
    valido=false
   }
    arrPasswd.forEach(a => {
        if (mayusculas.includes(a)) {
            mayus += 1
        }    
        if (minusculas.includes(a)){
            minus += 1
        }
        if (nums.includes(a)) {
            numeros += 1
        }
    });
    if (mayus<1) {
        valido = false
    }
    if (minus<1) {
        valido = false
    }
    if (numeros<1) {
        numeros = false
    } 

    if (!valido) {
        ev.preventDefault()
        return
    }
    
})