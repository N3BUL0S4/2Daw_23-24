<?php

namespace Daw\P1\controladores;

use Daw\P1\lib\Controller;
use Daw\P1\modelos\Baile;

class Crud extends Controller
{
    private Baile $baile;


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
        $this->baile = new baile(null,$this->get('name'),$this->get('precio'),$this->get('cuota'),$this->get('mondeda'),$this->get('plazas'),$this->get('comienzo'),$this->get('profesor'),$this->get('sala'));
        $this->baile->inserta();
        $this->render("crear", null);
    }
    public function listar()
    {

        $this->render("listar", baile::getbailes());
    }
    public function eliminar()
    {
        $this->baile = new baile($this->get('id'), "", 0, "", "", 0, "", "", 0);
        $this->baile->elimina();
        $this->render("listar", $this->baile->getbailes());
    }
    public function editar()
    {
        $this->baile = new baile($this->get('id'),$this->get('name'),$this->get('precio'),$this->get('cuota'),$this->get('mondeda'),$this->get('plazas'),$this->get('comienzo'),$this->get('profesor'),$this->get('sala'));
        $this->render('crear', $this->baile);
    }
    public function inicio()
    {
        $this->render('menu', null);
    }
    public function actualizar()
    {
        $this->baile = new baile($this->get('id'),$this->get('name'),$this->get('precio'),$this->get('cuota'),$this->get('mondeda'),$this->get('plazas'),$this->get('comienzo'),$this->get('profesor'),$this->get('sala'));
        $this->baile->actualiza();
        $this->render('listar', $this->baile->getbailes());
    }
}
