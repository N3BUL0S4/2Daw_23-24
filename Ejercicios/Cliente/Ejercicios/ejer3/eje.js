function comprobar() {
    let result = ""; 
    result += document.querySelector("#aa").value;
    result += document.querySelector("#ac").value;
    result += document.querySelector("#bb").value;
    result += document.querySelector("#cb").value;
    result += document.querySelector("#cc").value;
    result += document.querySelector("#cd").value;
    result += document.querySelector("#da").value;
    result += document.querySelector("#db").value;
    alert("a");

    let solucion ="21124334";
    let salida = "";
    if (result == solucion) {
         salida = `<h1>Tu respuesta es correcta</h1>`;
    } else {
        salida = `<h1>Tu respuesta no es correcta</h1>
            <br/>
            <h1 class="display-3">Sudoku para niños - Solución</h1>
        <div class="content">
        <table class="table table-success table-bordered">
            <tr>
                <td>2</td>
                <td>3</td>
                <td>1</td>
                <td>4</td>
            </tr>
            <tr>
                <td>4</td>
                <td>1</td>
                <td>3</td>
                <td>2</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>4</td>
                <td>3</td>
            </tr>
            <tr>
                <td>3</td>
                <td>4</td>
                <td>2</td>
                <td>1</td>
            </tr>
        </table>
        </div>`
    }
    document.querySelector("#salida").innerHTML=salida;
}