import { Component } from '@angular/core';
import { CitasService } from '../../services/citas.service';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrl: './salida.component.css'
})
export class SalidaComponent {

  constructor(public servicio:CitasService) {}
}
