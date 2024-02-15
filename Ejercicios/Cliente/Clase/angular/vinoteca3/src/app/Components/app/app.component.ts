import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  ArrVinos:Vinos[]=[];

  insertar(nombre:HTMLInputElement,pvp:HTMLInputElement) {
    const vino=new vino(nombre.value,pvp.value)
    this.ArrVinos.push(vino);
  }
}
