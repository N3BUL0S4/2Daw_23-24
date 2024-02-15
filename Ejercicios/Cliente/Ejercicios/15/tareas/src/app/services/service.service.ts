import { Injectable } from '@angular/core';
import { Todo } from '../Models/todoDTO';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  arrTodo:Todo[]=[];
  url="https://mierdiproyecto-default-rtdb.europe-west1.firebasedatabase.app/todo.json"

  constructor(public http:HttpClient){
    this.http.get<any>(this.url)
      .subscribe(response => {
        if (response!=null) {
          this.arrTodo=response
        }
      })
  }

  insertarTarea(tarea:string,limite:string){
    const obj=new Todo(tarea,limite)
    this.arrTodo.push(obj);
    console.log(this.arrTodo)
    
    const Arrobj=JSON.stringify(this.arrTodo);

    this.http.put(this.url,Arrobj)
    .subscribe(response => {
      console.log(response)})
    
  }
}
