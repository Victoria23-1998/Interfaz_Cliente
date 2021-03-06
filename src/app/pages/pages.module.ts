import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SolicitarViajeComponent } from './solicitar-viaje/solicitar-viaje.component';
import { EstadoViajesComponent } from './estado-viajes/estado-viajes.component';
import { MaterialModule } from '../material.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HistorialViajesComponent } from './historial-viajes/historial-viajes.component';
import 'animate.css';
import { RegisterComponent } from './register/register.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SolicitarViajeComponent,
    EstadoViajesComponent,
    HistorialViajesComponent,
    RegisterComponent
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
   
  ]
})
export class PagesModule { }
