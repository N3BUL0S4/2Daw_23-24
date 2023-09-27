let num;
let gordo="";
for (let i = 0; i < 5; i++) {
    num=Math.round(Math.random() * 9);
    gordo=gordo+num;
}
document.write("El GORDO: "+gordo);

for (let i = 0; i < 11; i++) {
    num=Math.round(Math.random() * 99999);
    if (gordo == num) {
        i--;
    } else {
    document.write("<br>");
    document.write("El " +(i+1)+": "+num);
    }
}