<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Transformación XML con XSLT</title>
</head>
<body>
    <h1>Transformación XML con XSLT</h1>
    <form action="" method="post" enctype="multipart/form-data">
        <div>
            <label for="xmlFile">Seleccionar archivo XML:</label>
            <input type="file" name="xmlFile" id="xmlFile" accept=".xml" required>
        </div>
        <div>
            <label for="xslFile">Seleccionar archivo XSL:</label>
            <input type="file" name="xslFile" id="xslFile" accept=".xsl, .xslt" required>
        </div>
        <div>
            <input type="submit" name="submit" value="Transformar">
        </div>
    </form>

    <?php
    if (isset($_POST['submit'])) {
        // Verificar si se cargaron archivos
        if (isset($_FILES['xmlFile']) && isset($_FILES['xslFile'])) {
            $xmlFile = $_FILES['xmlFile']['tmp_name'];
            $xslFile = $_FILES['xslFile']['tmp_name'];

            // Cargar XML y XSL
            $xml = new DOMDocument();
            $xml->load($xmlFile);

            $xsl = new DOMDocument();
            $xsl->load($xslFile);

            // Procesar la transformación XSLT
            $proc = new XSLTProcessor();
            $proc->importStyleSheet($xsl);
            $result = $proc->transformToXML($xml);

            // Mostrar resultado dependiendo del tipo de salida
            if (substr($result, 0, 5) === '<?xml') {
                // Si es XML, mostrar en un textarea
                echo "<h2>Resultado XML:</h2>";
                echo "<textarea cols='80' rows='20'>$result</textarea>";
            } else {
                // Si es HTML, mostrar en un iframe
                echo "<h2>Resultado HTML:</h2>";
                echo "<iframe srcdoc='$result' width='100%' height='400'></iframe>";
            }
        }
    }
    ?>
</body>
</html>