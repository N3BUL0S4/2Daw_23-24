let n1= Math.round(Math.random()*999)+1;
let n2 = 0;
let n3 = 0;

    do { 
        n2 = Math.round(Math.random()*999)+1;
    } while (n2 == n1 || n2 == n3);
    do {
        n3 = Math.round(Math.random()*999)+1;
    } while (n3 == n2 || n3 == n1);


document.write(n1+", "+n2+", "+n3);