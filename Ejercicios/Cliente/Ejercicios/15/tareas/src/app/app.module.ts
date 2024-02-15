import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './Components/listado/listado.component';
import { CrearComponent } from './Components/crear/crear.component';
import { ServiceService } from './services/service.service';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './Components/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    CrearComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
