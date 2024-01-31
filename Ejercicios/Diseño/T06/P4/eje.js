document.querySelector("#register").addEventListener("click",function () {
   user()
   passwd()
   email()
})

function user(){
    user=document.querySelector("#user").value
    if (user.length<3) {
        document.querySelector("#user").className="error"    
    } else { 
        document.querySelector("#user").className="text"    
    }
}
function passwd(){
    passwd=document.querySelector("#passwd").value
    if (passwd.length<8) {
        document.querySelector("#passwd").className="error"    
    } else { 
        document.querySelector("#passwd").className="text"    
    }
}
function email() {
    email=document.querySelector("#email").value
    ok=false
    if(email.includes("@")){
        ok=true
    }
    if(email.includes(".")){
        ok=true
    }
    console.log(ok)
    if(ok){
        document.querySelector("#email").className="text" 
    } else {
        document.querySelector("#email").className="error"    
    }
}