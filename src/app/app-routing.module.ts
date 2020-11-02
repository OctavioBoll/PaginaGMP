import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent} from '../app/component/inicio/inicio.component'
import { AtraccionesComponent } from '../app/component/atracciones/atracciones.component'
import { ServiciosComponent } from '../app/component/servicios/servicios.component'





const routes: Routes = [
  {path:'inicio', component: InicioComponent},
  {path:'atracciones', component: AtraccionesComponent},
  {path:'servicios', component: ServiciosComponent},
  {path:'' , redirectTo:'/inicio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
