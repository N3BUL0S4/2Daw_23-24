import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent {

  constructor(public wc:ServiceService) {}
  insertar(tarea:HTMLInputElement,limite:HTMLInputElement){
    this.wc.insertarTarea(tarea.value,limite.value);
  }
  
}


