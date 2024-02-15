import { Component } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css'
})
export class DatosComponent {
  crearObj(nombre:HTMLInputElement,pvp:HTMLInputElement) {
    const obj=new Vino(nombre.value,pvp.valueAsNumber);
  }
}
