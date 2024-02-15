<?php
namespace Fran\Mvc\lib;


class View{
    public $d;
    public function render(string $name, $data=[]){
        $this->d = $data;
 
        require 'src/vistas/' . $name . '.php';
    }
}


?>