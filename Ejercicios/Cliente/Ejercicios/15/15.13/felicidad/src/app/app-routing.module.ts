import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './Components/index/index.component';
import { ListarComponent } from './Components/listar/listar.component';
import { InsertarComponent } from './Components/insertar/insertar.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'listar',component:ListarComponent},
  {path:'insertar',component:InsertarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
