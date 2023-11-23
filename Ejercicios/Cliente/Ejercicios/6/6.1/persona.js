class Persona {
    constructor(nombre = "",edad = 0,sexo = "",peso = 0,altura = 0) {
    this.dni = generaDni();
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = Persona.comprobarSexo(sexo);
    this.peso = peso;
    this.altura = altura;
    }
    
    calcularIMC() {
    let cuenta = this.peso / (this.altura * this.altura);
    if (cuenta<20) return -1;
    if (cuenta<=25) return 0;
    return 1
    }
    
    esMayorDeEdad (){
    return this.edad>=18;
    
    }
    static comprobarSexo (sexo){
        if (sexo=="M" || sexo=="H") {return sexo;}
        return sexo="Jilipollas";
    }

    toString() {
        return "DNI: "+this.dni+"Nombre: "+this.nombre+"Edad: "+this.edad+"Sexo: "+this.sexo+"Peso: "+this.peso+"Altura: "+this.altura;
    }

    static generaDni() {
        let salida="";
        for (let i=1; i<=8;i++){
            salida+=Math.round(Math.random()*9);
        }
        var mayusculas = ['A','B','C','D'];
        salida+="-"+mayusculas[Math.round(Math.random()*mayusculas.length())];
        return salida;
    }
}