<?php
namespace Daw\P1\lib;


class View{
    public $d;
    public function render(string $name, $data=[]){
        $this->d = $data;
 
        require 'src/vistas/' . $name . '.php';
    }
}
?>