import { Injectable } from '@angular/core';
import { Cita } from '../models/citaDto';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  arrCitas:Cita[];
  constructor() {
    this.arrCitas=[];
  }

  insertar(nombre:string, dni:string, fechVacuna:string, fechSintomas:string, sintomas:string) {
    const cita=new Cita(nombre, dni, fechVacuna, sintomas, sintomas);
    this.arrCitas.push(cita);
  }

}
