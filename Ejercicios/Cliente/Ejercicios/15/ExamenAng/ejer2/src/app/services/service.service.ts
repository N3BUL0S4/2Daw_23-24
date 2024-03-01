import { Injectable } from '@angular/core';
import { gasto } from '../models/gastoDTO';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  presupuesto=0
  restante=0
  gastos:gasto[]=[]
  constructor() { }

  insertarPresupuesto(num:number) {
    this.presupuesto=num
    this.restante=num
    console.log(this.presupuesto)
    alert('Presupuesto aceptado')
  }

  agregarGasto(gasto:gasto) {
    this.gastos.push(gasto)
    this.restante-=gasto.cantidad
    alert("gasto incluido")
  }

}
