import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  url="https://gorest.co.in/public/v2/users"
  datos:any

  constructor(public http:HttpClient) {
    this.http.get<any>(this.url)
          .subscribe (response => {
            this.datos=response
            console.log(response);
           })
   }

}
