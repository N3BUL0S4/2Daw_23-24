export class Persona {
    nombrePersona:String;
    categoria:String;
    nombreEmpresa:String;
    nivelFelicidad:number;

    constructor (nombrePersona:String,categoria:String,nombreEmpresa:String,nivelFelicidad:number) {
        this.nombrePersona=nombrePersona;
        this.categoria=categoria;
        this.nombreEmpresa=nombreEmpresa;
        this.nivelFelicidad=nivelFelicidad;
    }

    
}