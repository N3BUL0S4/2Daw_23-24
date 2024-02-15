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
                    <legend>Teléfono</legend>
                    <input name="telefono" type="text" value="<?php if ($editar) echo $con->telefono ?>" />
                </fieldset>
            </td>
            <td>
                <fieldset>
                    <legend>foto</legend>
                    <input name="foto" type="file" />
                </fieldset>
            </td>
        </tr>
    </table>
    <?php
    if ($editar) {
        echo " <input name='codigo' type='hidden' value='" . $con->codigo . "'/>";
    }

    ?>
    <input type="submit" name='op' value="<?php echo ($editar ? 'actualizar' : 'guardar') ?>" />
</form>
<?php
include_once "pie.php";
?>