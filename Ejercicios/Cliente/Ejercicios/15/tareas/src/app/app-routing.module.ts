import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './Components/index/index.component';
import { CrearComponent } from './Components/crear/crear.component';
import { ListadoComponent } from './Components/listado/listado.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'crear',component:CrearComponent},
  {path:'lista',component:ListadoComponent}    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
