import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { NgForm } from '@angular/forms';
import { gasto } from '../../models/gastoDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css'
})
export class GastosComponent {
  constructor(public ruta:Router,public service:ServiceService) {}
  restante=this.service.restante

  agregarGasto(f:NgForm) {
    let g:gasto = new gasto(f.value.gasto,f.value.cantidad)
    this.service.agregarGasto(g)
  }

  compRestante(cantidad:number){
    return !(cantidad > this.restante)
  }
}
