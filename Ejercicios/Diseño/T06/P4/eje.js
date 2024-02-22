document.querySelector("#register").addEventListener("click",function () {
   user()
   passwd()
   email()
})
// Validacion de usuario
function user(){
    // Recuperamos el usuario
    user=document.querySelector("#user").value
    // comprobamos que se mas largo de 3 caracteres
    if (user.length<3) {
        document.querySelector("#user").className="error"    
    } else { 
        document.querySelector("#user").className="text"    
    }
}

// Validacion de Contraseña
function passwd(){ç
    // Recuperamos la contraseña
    passwd=document.querySelector("#passwd").value
    // comprobamos que la contraseña sea mayor de 8 caracteres
    if (passwd.length<8) {
        document.querySelector("#passwd").className="error"    
    } else { 
        document.querySelector("#passwd").className="text"    
    }
}
// validacion de email
function email() {
    // recuperamos el email
    email=document.querySelector("#email").value
    // creamos una variable para hacerlo mas legible
    ok=false
    // comprobamos que incluya los caracteres @ y .
    if(email.includes("@") && email.includes(".")){
        // asignamos la variable a true
        ok=true
    }
    // con la variable comprbamos que el email esta correcto
    if(ok){
        document.querySelector("#email").className="text" 
    } else {
        document.querySelector("#email").className="error"    
    }
}