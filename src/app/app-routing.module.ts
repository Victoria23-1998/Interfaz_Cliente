import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { EstadoViajesComponent } from './pages/estado-viajes/estado-viajes.component';
import { HistorialViajesComponent } from './pages/historial-viajes/historial-viajes.component';
import { SolicitarViajeComponent } from './pages/solicitar-viaje/solicitar-viaje.component';
import { RegisterComponent } from './pages/register/register.component';
const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'estado',
    component:EstadoViajesComponent
  },
  {
    path:'historial',
    component:HistorialViajesComponent
  },
  {
    path:'solicitar',
    component:SolicitarViajeComponent
  },
  {
    path:'registro',
    component:RegisterComponent
  },
  {
    path:'**',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
