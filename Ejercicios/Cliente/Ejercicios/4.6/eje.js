let n1 = 1;
let n2 = 1;
let n3 = 1;
let n4 = 1;
let n5 = 1;
let n;
document.write(n1+", "+n2+", "+n3+", "+n4+", "+n5+", ");

for (let i=0 ; i < 25; i++){
    n=(n1+n2+n3)-n4
    document.write(n+", ");
    n1=n2;
    n2=n3;
    n3=n4;
    n4=n5;
    n5=n;
}