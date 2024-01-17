<?php
namespace Fran\Mvc\modelos;
use Fran\Mvc\lib\Model;
use PDO;
class Contacto extends Model{
    private int $codigo;
    private string $nombre;
    private string $telefono;
    public function __construct($codigo,$nombre,$telefono)
    {
        
        $this->nombre=$nombre;
        $this->telefono=$telefono;
        $this->codigo =($codigo==null)?$this->generaCodigo():$codigo;
        }
    

    public function inserta(){
        $query = $this->prepare('INSERT INTO contactos (codigo,nombre,telefono) VALUES (:codigo, :nombre, :telefono)');
        $query->execute(['codigo'=>$this->codigo,
         'nombre'=>$this->nombre,
         'telefono'=>$this->telefono]);

    }
    public function actualiza(){
        $query = $this->prepare('UPDATE contactos SET nombre=:nombre,telefono=:telefono WHERE codigo=:codigo');
        $query->execute(['codigo'=>$this->codigo,
         'nombre'=>$this->nombre,
         'telefono'=>$this->telefono]);

    }
    public function elimina(){
        $query = $this->prepare('DELETE FROM contactos WHERE codigo= :codigo');
        $query->execute(['codigo'=>$this->codigo]);
    }

    
    private function generaCodigo(){
        $query=$this->query("SELECT max(codigo) as cod FROM contactos");
        $data = $query->fetch();
        return ($data)?$data['cod']+1:1;
    }
    public static function getContactos(){
        $contactos=[];
        $datos=self::query("SELECT * FROM contactos");
        
        while ($con = $datos->fetch()){
            $contactos[]= new Contacto($con['codigo'],$con['nombre'],$con['telefono']);
        }
      
        return $contactos;
    }
  
   
   
    public function __get($prop){
        return $this->$prop;
    }
    public function __set($prop,$valor){
        $this->$prop=$valor;
    }
}