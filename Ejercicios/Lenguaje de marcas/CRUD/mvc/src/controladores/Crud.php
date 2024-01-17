<?php

namespace Fran\Mvc\controladores;

use Fran\Mvc\lib\Controller;
use Fran\Mvc\modelos\Contacto;

class Crud extends Controller
{
    private Contacto $contacto;


    public function __construct()
    {
        parent::__construct();
    }
    public function crear()
    {
        $this->render("crear", null);
    }
    public function guardar()
    {
        $this->contacto = new Contacto(null, $this->get('nombre'), $this->get('telefono'));
        $this->contacto->inserta();
        $this->render("crear", null);
    }
    public function listar()
    {

        $this->render("listar", Contacto::getContactos());
    }
    public function eliminar()
    {
        $this->contacto = new Contacto($this->get('codigo'), "", "");
        $this->contacto->elimina();
        $this->render("listar", $this->contacto->getContactos());
    }
    public function editar()
    {
        $this->contacto = new Contacto($this->get('codigo'), $this->get('nombre'), $this->get('telefono'));
        $this->render('crear', $this->contacto);
    }
    public function inicio()
    {
        $this->render('menu', null);
    }
    public function actualizar()
    {
        $this->contacto = new Contacto($this->get('codigo'), $this->get('nombre'), $this->get('telefono'));
        $this->contacto->actualiza();
        $this->render('listar', $this->contacto->getContactos());
    }
}
