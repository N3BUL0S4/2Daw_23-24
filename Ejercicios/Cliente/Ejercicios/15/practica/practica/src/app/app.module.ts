import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalidaComponent } from './components/salida/salida.component';
import { CitasService } from './services/citas.service';

@NgModule({
  declarations: [
    AppComponent,
    SalidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CitasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
