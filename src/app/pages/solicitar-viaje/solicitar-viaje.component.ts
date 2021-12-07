import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/interfaces/Equipo';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SoliciViajeService } from 'src/app/servicios/solici-viaje.service';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { Local } from 'src/app/interfaces/local';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-solicitar-viaje',
  templateUrl: './solicitar-viaje.component.html',
  styleUrls: ['./solicitar-viaje.component.scss']
})

export class SolicitarViajeComponent implements OnInit {
  
  equipo:Equipo={
    marca:'',
    modelo:'',
    falla:'',
  }

  local:Local={} 
  userId:string = ''
  
  constructor(private soliciViajeService: SoliciViajeService, private localStorageService:LocalStorageService) {

  } 
  
  ngOnInit(): void {
    this.local= this.localStorageService.getLocal('Usuario')
    this.userId= this.local.id!.toString()
    
  }
  
  formViaje = new FormGroup ({
    marca: new FormControl('', [Validators.required]),
    modelo: new FormControl('', [Validators.required]),
    falla: new FormControl('', [Validators.required]),
  })
   
  

  onSubmit(formDirective:FormGroupDirective){
    localStorage.setItem('Equipo', JSON.stringify(this.formViaje.value));

    this.equipo=JSON.parse(localStorage.getItem('Equipo') ||'')

    if(this.equipo !== undefined){
      this.soliciViajeService.setEquipo(this.userId,this.equipo.marca,this.equipo.modelo,this.equipo.falla,this.formViaje.value).subscribe(respuesta => {
        console.log(respuesta)
      },(error:HttpErrorResponse)=>{
        console.log('Este es el error', error.error)
      });
    }else{
      console.log("no se pudo enviar")
    }

    

    formDirective.resetForm();
    this.formViaje.reset()
    this.showAlert(this.equipo.marca,this.equipo.falla,this.local.adress as string )
  }
    
    showAlert(marca:string,falla:string,adress:string ){
      Swal.fire({
        title: '¡Solicitud Exitosa!',
        text: "El equipo a retirar es: " + marca+"\n" +
        "Con la falla: " +falla + "\n" + 
        "Se retira en la dirección: " + adress,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    
  }

} 
