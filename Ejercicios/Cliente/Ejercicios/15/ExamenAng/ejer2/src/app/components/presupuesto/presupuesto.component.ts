import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrl: './presupuesto.component.css'
})
export class PresupuestoComponent {
  constructor(public ruta:Router,public service:ServiceService) {}

  enviar(f:NgForm) {
    this.service.insertarPresupuesto(f.value.presupuesto)
    this.ruta.navigate(['gastos'])
  }
}
