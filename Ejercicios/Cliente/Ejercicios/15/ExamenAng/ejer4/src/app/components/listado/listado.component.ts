import { Component } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  constructor(public ruta:Router,public service:ServiceService) {

  }

  agregar() {
    this.ruta.navigate(['agregar'])
  }
}
