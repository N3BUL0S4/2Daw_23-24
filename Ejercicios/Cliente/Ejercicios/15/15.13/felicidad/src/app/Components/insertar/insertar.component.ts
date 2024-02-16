import { Component } from '@angular/core';
import { Persona } from '../../Models/PersonaDTO';
import { ServicioService } from '../../Services/servicio.service';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrl: './insertar.component.css'
})
export class InsertarComponent {

  constructor(private sv:ServicioService) {}

crear(nombrePersona:HTMLInputElement,categoria:HTMLSelectElement,nombreEmpresa:HTMLInputElement,felicidad:HTMLInputElement) {
    const persona = new Persona(nombrePersona.value,categoria.value,nombreEmpresa.value,Number(felicidad.value))
    this.sv.insertar(persona);
  }
}
