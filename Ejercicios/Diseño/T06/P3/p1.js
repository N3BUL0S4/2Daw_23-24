// Guardamos los selectores mas usados
bt=document.querySelector("#bt")
text=document.querySelector("#text")
botones=document.querySelector("#botones")

// El evento que cambia el texto oculto a la vista y a la inversa 
bt.addEventListener("click",function() {
    if(bt.innerHTML=="Mostrar mas") {
        
        bt.innerHTML="Mostrar menos" 
        text.className="izquierda"
        botones.className="izquierda"   
    } else {
        bt.innerHTML="Mostrar mas"
        text.className="container"
        botones.className="hidden"
    }
});
// Los eventos que cambian el texto con classes en css
document.querySelector("#left").addEventListener("click",function() {
    text.className="left"
});

document.querySelector("#center").addEventListener("click",function() {
    text.className="center"
});

document.querySelector("#justify").addEventListener("click",function() {
    text.className="justify"
});