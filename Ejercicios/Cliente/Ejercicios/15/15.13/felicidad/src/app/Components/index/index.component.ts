import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
constructor(private ruta:Router){}

navegar (direccion:string) {
  this.ruta.navigate([direccion])
}

}
