let num = Number(prompt("Enter a number"));

for (let i = 1; i < num; i++) {
    if (num % i == 0) { 
       document.write(i + ", "); 
    }
}
