import { Injectable } from '@angular/core';
import { empleado } from '../models/empleadoDTO';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  empleados:empleado[]=[]

  constructor() {}

  agregar(e:empleado){
    this.empleados.push(e)
    console.log(this.empleados)
  }

  
}
