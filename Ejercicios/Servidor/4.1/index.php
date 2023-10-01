<?php

do {

?>
    <!DOCTYPE html>
    <html lang="es">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        <form action="procesa.php" method="post">
            <label>Introduce un numero mayor que 1: </label>
            <input type="number" name="num" id="num" required>
            <input type="submit" value="Enviar" required>
        </form>
    </body>

    </html>
<?php

$num = $_POST ['num'];
echo $num;
} while ($num < 1);
?>