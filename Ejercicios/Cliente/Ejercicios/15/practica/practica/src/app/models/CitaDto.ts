export class Cita {
    nombre:string;
    dni:string;
    fechVacuna:string;
    fechSintomas:string;
    sintomas:string;
    
    constructor(nombre:string, dni:string, fechVacuna:string, fechSintomas:string, sintomas:string,) {
        this.nombre=nombre;
        this.dni=dni;
        this.fechVacuna=fechVacuna;
        this.fechSintomas=fechSintomas;
        this.sintomas=sintomas;
        }
}