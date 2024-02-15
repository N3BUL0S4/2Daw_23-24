import { Component } from '@angular/core';
import { CitasService } from '../../services/citas.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrl: './entrada.component.css'
})
export class EntradaComponent {
    constructor(public servicio:CitasService) {}
    inserta(name:HTMLInputElement,dni:HTMLInputElement,fvacuna:HTMLInputElement,fsintomas:HTMLInputElement,sintomas:HTMLTextAreaElement) {
      this.servicio.insertar(name.value,dni.value,fvacuna.value,fsintomas.value,sintomas.value);
    }
}
