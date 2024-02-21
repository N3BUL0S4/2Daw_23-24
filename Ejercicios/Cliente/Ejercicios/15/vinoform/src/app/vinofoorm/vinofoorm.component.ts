import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Vino } from '../Models/vinoDTO';

@Component({
  selector: 'app-vinofoorm',
  templateUrl: './vinofoorm.component.html',
  styleUrl: './vinofoorm.component.css'
})
export class VinofoormComponent {
  procesa(FormVino:NgForm) {
    const vino=new Vino(FormVino.value.nombre,FormVino.value.pvp)
    console.log(vino)
  }
}
