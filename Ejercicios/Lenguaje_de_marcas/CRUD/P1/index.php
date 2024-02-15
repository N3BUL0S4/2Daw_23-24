<?php
require 'vendor/autoload.php';
error_reporting(E_ALL);

use Daw\P1\controladores\Crud;

$control = new Crud;


if (isset($_REQUEST['op'])) {
    $op = $_REQUEST['op'];

    switch ($op) {
        case 'crear':
            $control->crear();
            break;
        case 'listar':
            $control->listar();
            break;
        case 'eliminar':
            $control->eliminar();
            break;
        case 'guardar':
            $control->guardar();
            break;
        case 'editar':
            $control->editar();
            break;
        case 'actualizar':
            $control->actualizar();
            break;
        default:
            $control->inicio();
    }
} else {
    $control->inicio();
}
