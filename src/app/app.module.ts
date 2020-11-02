import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuerpoComponent } from './component/cuerpo/cuerpo.component';
import { MenuComponent } from './component/menu/menu.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { AtraccionesComponent } from './component/atracciones/atracciones.component';
import { ServiciosComponent } from './component/servicios/servicios.component';

@NgModule({
  declarations: [
    CuerpoComponent,
    MenuComponent,
    InicioComponent,
    AtraccionesComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [CuerpoComponent]
})
export class AppModule { }
