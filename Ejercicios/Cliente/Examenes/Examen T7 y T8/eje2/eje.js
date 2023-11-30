let sol=[];
document.querySelector("#generar").addEventListener("click", function () {
    let nums=0
    let num1=1
    let num2=0

    for (let i = 0; i < 36000; i++) {
        num1=Math.round(Math.random()*5)+1
        num2=Math.round(Math.random()*5)+1
        nums=num1+num2;
        console.log(nums)
        if (sol[nums-2]==null) { 
            sol[nums-2]=0
        }
        sol[nums-2]+=1        
        console.log(sol[nums-2])
    }
    mostrar()
})

function mostrar() {
    let salida =``;
    for (let i = 0; i < sol.length; i++) {
        const a = sol[i];
        console.log(a)
        salida += `Suma ${i+2}: Han sumado ${a} <br/>`
    }
    document.querySelector("#salida").innerHTML=salida
}