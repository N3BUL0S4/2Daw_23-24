import { Injectable } from '@angular/core';
import { empleado } from '../models/empleadoDTO';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  empleados:empleado[]=[]
  url="https://mierdiproyecto-default-rtdb.europe-west1.firebasedatabase.app/empleado.json"
  constructor(public http:HttpClient) {
    this.http.get<any>(this.url)
          .subscribe (response => {
            if (response!=null) {
              this.empleados=response
              console.log(response);
            }
          })
  }

  agregar(e:empleado){
    this.empleados.push(e)
    console.log(this.empleados)
    let obj=JSON.stringify(this.empleados)

    this.http.put(this.url,obj)
      .subscribe(response => {
        console.log(response);
      })
  }

  
}
