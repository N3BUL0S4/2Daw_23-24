import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { empleado } from '../../models/empleadoDTO';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {
  constructor(public ruta:Router, public service:ServiceService) {}

  agregar(f:NgForm) {
    let e:empleado= new empleado(f.value.nombre,f.value.apellidos,f.value.documento,f.value.salario)
    this.service.agregar(e)
    alert("El empleado a sido creado")
  }
  volver() {
    this.ruta.navigate([''])
  }
}
