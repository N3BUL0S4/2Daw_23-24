<?php
include_once "menu.php";
$editar = false;
if (isset($this->d)) {
    $editar = true;
    $con = $this->d;
}

?>

<form name="formulario" action="<?php echo $_SERVER['PHP_SELF'] ?>
      " method="post" enctype="multipart/form-data">
    <table style="border: 0px;">
        <tr style="background-color: #8080ff;">Introduzca los datos
            <!-- Solicitamos el nombre de la persona -->
            <td>
                <fieldset>
                    <legend>Nombre</legend>
                    <input name="nombre" type="text" value="<?php if ($editar) echo ($con->nombre) ?>" />

                </fieldset>
            </td>
            <td>
                <fieldset>
                    <legend>precio</legend>
                    <input name="precio" type="text" value="<?php if ($editar) echo $con->precio ?>" />
                </fieldset>
            </td>
            <td>
                <fieldset>
                    <legend>cuota</legend>
                    <input name="cuota" type="text" value="<?php if ($editar) echo $con->cuota ?>" />
                </fieldset>
            </td>
            <td>
                <fieldset>
                    <legend>moneda</legend>
                    <input name="moneda" type="text" value="<?php if ($editar) echo $con->moneda ?>" />
                </fieldset>
            </td>
            <td>
                <fieldset>
                    <legend>plazas</legend>
                    <input name="plazas" type="text" value="<?php if ($editar) echo $con->plazas ?>" />
                </fieldset>
            </td>
            <td>
                <fieldset>
                    <legend>comienzo</legend>
                    <input name="comienzo" type="text" value="<?php if ($editar) echo $con->comienzo ?>" />
                </fieldset>
            </td>
            <td>
                <fieldset>
                    <legend>profesor</legend>
                    <input name="profesor" type="text" value="<?php if ($editar) echo $con->profesor ?>" />
                </fieldset>
            </td>
            <td>
                <fieldset>
                    <legend>sala</legend>
                    <input name="sala" type="text" value="<?php if ($editar) echo $con->sala ?>" />
                </fieldset>
            </td>
        </tr>
    </table>

       
    <?php
    if ($editar) {
        echo " <input name='id' type='hidden' value='" . $con->id . "'/>";
    }

    ?>
    <input type="submit" name='op' value="<?php echo ($editar ? 'actualizar' : 'guardar') ?>" />
</form>
<?php
include_once "pie.php";
?>