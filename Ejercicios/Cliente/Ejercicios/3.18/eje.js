º
ç

for (var i = 0; i < 30 ; i += 2) {
    for (var j = 30 ; j >= i ; j -= 2) {
        document.write("_");   
    }
    for (var k = 0; k <= i; k += 1) {
        document.write("*");
    }
    document.write("<br>");
}
