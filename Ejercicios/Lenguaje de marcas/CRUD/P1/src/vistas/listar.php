<?php
include_once "menu.php";

?>
<article>
    <table border="1">
        <thead>
            <td>id</td>
            <td>Nombre</td>
            <td>Precio</td>
            <td>cuota</td>
            <td>monedas</td>
            <td>plazas</td>
            <td>comienzo</td>
            <td>profesor</td>
            <td>sala</td>
            <td>editar</td>
        </thead>
        <?php

        foreach ($this->d as $con) {
            if (strlen($con->id) > 0) {
                echo "<tr>";
                echo "<td>" . $con->id . "</td>";
                echo "<td>" . $con->nombre . "</td>";
                echo "<td>" . $con->precio . "</td>";
                echo "<td>" . $con->cuota . "</td>";
                echo "<td>" . $con->moneda . "</td>";
                echo "<td>" . $con->plazas . "</td>";
                echo "<td>" . $con->comienzo . "</td>";
                echo "<td>" . $con->profesor . "</td>";
                echo "<td>" . $con->sala . "</td>";
                echo "<td><a href='index.php?op=editar&codigo=" . $con->id . "&nombre=" . $con->nombre . "'>Editar</a><br>";
                echo "<a href='index.php?op=eliminar&codigo=" . $con->id . "'>Elminar</a></td>";
                echo "</tr>";
            }
        }
        ?>
    </table>
</article>
<?php
include "pie.php";
?>