<?php
namespace Daw\P1\lib;
use Daw\P1\lib\View;

class Controller{
    private View $view;

    public function __construct()
    {
        $this->view= new View();
        
    }

    public function render(string $name, $data){

        $this->view->render($name, $data);
    }

    protected function get($param){
        if(!isset($_REQUEST[$param])){
            error_log("ExistPOST: No existe el parametro $param" );
            return NULL;
        }
        return $_REQUEST[$param];
    }

  

    protected function file($param){
        if(!isset($_FILES[$param])){
            error_log("ExistPOST: No existe el parametro $param" );
            return NULL;
        }
        return $_FILES[$param];
    }

}


?>