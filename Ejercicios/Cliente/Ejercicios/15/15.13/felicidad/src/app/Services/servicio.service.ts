import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../Models/PersonaDTO';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  url="https://mierdiproyecto-default-rtdb.europe-west1.firebasedatabase.app/persona.json"
  ArPersona:Persona[]=[];

  constructor(public http:HttpClient) { 

    this.http.get<Persona[]>(this.url)
      .subscribe (response => {
        console.log(response);
        if (response != null) {  
          this.ArPersona=response;
        }
      })


  }
    
  insertar(persona:Persona) {
    this.ArPersona.push(persona);
    console.log(this.ArPersona)

    let obj = JSON.stringify(this.ArPersona)

    this.http.put(this.url,obj)
      .subscribe(response => {
        console.log(response);
      })
  }
}
