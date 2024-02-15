<?php
include_once "menu.php";

?>
<article>
    <table border="1">
        <thead>
            <td>Código</td>
            <td>Nombre</td>
            <td>Teléfono</td>
            <td>Foto</td>
            <td>Operaciones</td>
        </thead>
        <?php

        foreach ($this->d as $con) {
            if (strlen($con->codigo) > 0) {
                echo "<tr>";
                echo "<td>" . $con->codigo . "</td>";
                echo "<td>" . $con->nombre . "</td>";
                echo "<td>" . $con->telefono . "</td>";
                echo "<td><img src='" . $con->codigo . ".jpg' height=80 width=80/></td>";
                echo "<td><a href='index.php?op=editar&codigo=" . $con->codigo . "&nombre=" . $con->nombre . "&telefono=" . $con->telefono . "'>Editar</a><br>";
                echo "<a href='index.php?op=eliminar&codigo=" . $con->codigo . "'>Elminar</a></td>";
                echo "</tr>";
            }
        }
        ?>
    </table>
</article>
<?php
include "pie.php";
?>