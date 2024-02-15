import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
ArrVinos:Vino[]=[];

insertar (nombre:HTMLInputElement,pvp:HTMLInputElement) {
  const obj=new vino(nombre.value,pvp.value);
   
}
}
