import { Component } from '@angular/core';
import { ServicioService } from '../../Services/servicio.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {

  constructor(public sv:ServicioService) {}

}
