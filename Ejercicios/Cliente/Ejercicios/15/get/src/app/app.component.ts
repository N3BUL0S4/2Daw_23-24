import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public http:HttpClient){
    let url="https://jsonplaceholder.typicode.com/posts";
    this.http.get<any>(url)
           .subscribe (response => {
             console.log(response );
           })

  }
}
