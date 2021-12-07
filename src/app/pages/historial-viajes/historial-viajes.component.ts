import { Component, OnInit, ViewChild } from '@angular/core';
//import { Historial } from 'src/app/interfaces/historial';
import { Tabla, TravelEquipmentDTO } from 'src/app/interfaces/viaje';
import { Equipment } from 'src/app/interfaces/viaje';
import { Local } from 'src/app/interfaces/local';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { EstadoViajeService } from 'src/app/servicios/estado-viaje.service';
import {MatTableDataSource} from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { Welcome } from 'src/app/interfaces/login';

@Component({
  selector: 'app-historial-viajes',
  templateUrl: './historial-viajes.component.html',
  styleUrls: ['./historial-viajes.component.scss']
})
export class HistorialViajesComponent  {

  @ViewChild(MatPaginator) paginator!:MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  dataTable:Tabla={
    fecha:'',
    marca:'',
    modelo:'',
    estadoEqui:'',
    EstadoEnvio:''
  }
  tEqui: TravelEquipmentDTO= {
    id: 0,
    operationDate: '',
    observation: null,
    cadete: null,
    operator:'Operator',
    equipment:     null,
    statusTravel: 0
}
 
  displayedColumns: string[] = ['fecha', 'marca', 'modelo', 'EstadoEquipo','EstadoEnvio','FechaEntrega'];
  dataSource = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  local:Local={}
  userId:number= 0
  constructor(private estadoViajeService: EstadoViajeService, private localS:LocalStorageService) { }
  
 
  ngOnInit(): void {
    this.local= this.localS.getLocal('Usuario')
    this.userId = this.local.id as number
    

    this.estadoViajeService.getEquipo(this.userId.toString()).subscribe((data) =>{
     
      this.dataSource.data = data as Object[]

    },(error:HttpErrorResponse)=>{
      console.log('Este es el error', error.error)
    });
   
  }
  
  //Estado del envio
  descripEstate(state:number){
    let result:string = ''
    switch (state) {
      case 1:
        result = "Pendiente"
        break;
      case 2:
        result = "Pendiente"
        break;
      case 3:
        result = "En curso"
        break;
      case 4:
        result = "Entregado"
        break;
      case 5:
        result = "Entregado"
        break;
      case 6:
        result = "Pendiente"
        break;
      case 7:
        result = "Pendiente"
        break;
      case 8:
        result = "Entregado"
        break;
      case 9:
        result = "Entregado"
        break;
      case 10:
        result = "Pendiente"
        break;
      default:
        break;
     
    }
    return result
  }

  //estado del  equipo

  descripEstEquip(state:number){
    let result:string = ''
   switch (state) {
     case 1:
       result = "A reparar"
       break;
     case 2:
       result = "A Reparado"
       break;
     case 3:
       result = "A Reparado"
       break;
     case 4:
       result = "A reparar"
       break;
     case 5:
       result = "Reparado"
       break;
     case 6:
       result = "Reparado"
       break;
     case 7:
       result = "Reparado"
       break;
     case 8:
       result = "Reparado"
       break;
     case 9:
       result = "A Reparar"
       break;
     case 10:
       result = "A reparar"
       break;
     default:
       break;
    
   }
   return result
  }
 //Fecha entregado

  dateDelivered(state:number){
    let result:string = ''
   
   if(state < 8 ){
    result = "--"
   } else{
     //result = `${this.dataSource.travelEquipmentDTOs[this.dataSource.data.travelEquipmentDTOs.length-1].operationDate | date:'M/d/Y'}`
   }
   return result
  }
    
}
