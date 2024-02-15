<?php
namespace Daw\P1\modelos;
use Daw\P1\lib\Model;

class Baile extends Model {
    private int $id;
    private string $name;
    private float $precio;
    private string $cuota;
    private string $mondeda;
    private int $plazas;
    private string $comienzo;
    private string $profesor;
    private int $sala;

    public function __construct($id,$name,$precio,$cuota,$mondeda,$plazas,$comienzo,$profesor,$sala) {
        
        $this->$id=$id;
        $this->$name=$name;
        $this->$precio=$precio;
        $this->$cuota=$cuota;
        $this->$mondeda=$mondeda;
        $this->$plazas=$plazas;
        $this->$comienzo=$comienzo;
        $this->$profesor=$profesor;
        $this->$sala=$sala;
    }
    public function inserta() {
        $query = $this->prepare('INSERT INTO bailes ($id$name,$precio,$cuota,$mondeda,$plazas,$comienzo,$profesor,$sala) VALUES ($id:$name,:$precio,:$cuota,:$mondeda,:$plazas,:$comienzo,:$profesor,:$sala)');
        $query->execute(['$id'=>$this->id,'$name'=>$this->name,'$precio'=>$this->precio,'$cuota'=>$this->cuota,'$mondeda'=>$this->mondeda,'$plazas'=>$this->plazas,'$comienzo'=>$this->comienzo,'$profesor'=>$this->profesor,'$sala'=>$this->sala,]);
    }
    public function actualiza() {
        $query = $this->prepare('UPDATE bailes SET id=:id,name=:name,precio=:precio,cuota=:cuota,mondeda=:mondeda,plazas=:plazas,comienzo=:comienzo,profesor=:profesor,sala=:sala,');
        $query->execute(['$id'=>$this->id,'$name'=>$this->name,'$precio'=>$this->precio,'$cuota'=>$this->cuota,'$mondeda'=>$this->mondeda,'$plazas'=>$this->plazas,'$comienzo'=>$this->comienzo,'$profesor'=>$this->profesor,'$sala'=>$this->sala,]);
    }
    public function elimina() {
        $query = $this->prepare('DELETE FROM bailes WHERE id=:id');
        $query->execute(['id'=>$this->id]);
    }
    public function generaId() {
        $query=$this->query('SELECT max(id) AS id FROM bailes');
        $data = $query->fetch();
        return ($data)?$data['id']+1:1;
    }
    public static function getBailes(){
        $bailes = [];
        $datos=self::query('SELECT * FROM bailes');
        
        while ($con = $datos->fetch()) {
            $bailes[]=new Baile($con['$id'],$con['$name'],$con['$precio'],$con['$cuota'],$con['$mondeda'],$con['$plazas'],$con['$comienzo'],$con['$profesor'],$con['$sala']);
        }

        return $bailes;
    }
    public function __get($prop){
        return $this->$prop;
    }
    public function __set($prop,$valor) {
        $this->$prop=$valor;
    }
}

?>