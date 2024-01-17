document.addEventListener("mousedown",  function(e) {
    console.log(e.buttons);
    if (e.buttons==1) {
        document.querySelector("#click").innerHTML="ClickIzquierdo"
    } else if (e.buttons==2) {
        document.querySelector("#click").innerHTML="ClickDerecho"
    } else if (e.buttons==3) {
        document.querySelector("#click").innerHTML="DerechoEIzquierdo"
    } else if (e.buttons==4) {
        document.querySelector("#click").innerHTML="BotonRueda"
    }

})

document.addEventListener("mousemove", function(e) {
    ry=e.clientY
    rx=e.clientX
    py=e.pageY
    px=e.pageX

    document.querySelector("#raton").innerHTML="X:"+rx+", Y:"+ry
    document.querySelector("#pagina").innerHTML="X:"+px+", Y:"+py
})