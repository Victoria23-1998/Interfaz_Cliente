import { Component, OnInit, ViewChild } from '@angular/core';
import { Tabla, TravelEquipmentDTO } from 'src/app/interfaces/viaje';
import { Local } from 'src/app/interfaces/local';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { EstadoViajeService } from 'src/app/servicios/estado-viaje.service';
import {MatTableDataSource} from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-historial-viajes',
  templateUrl: './historial-viajes.component.html',
  styleUrls: ['./historial-viajes.component.scss']
})
export class HistorialViajesComponent  {
  isloading:boolean=true
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
      
      this.isloading=false
    },(error:HttpErrorResponse)=>{
      console.log('Este es el error', error.error)
    });
   
  }
  
  //Estado del envio
  descripEstate(state:number){
    let result:string = ''
    switch (state) {
      case 1||2:
        result = "Pendiente"
        break;
     case 3:
        result = "En curso"
        break;
      case 4||5||8||9:
        result = "Entregado"
        break;
      case 7||10||6:
        result = "Pendiente"
        break;
     
    }
    return result
  }

  //estado del  equipo

  descripEstEquip(state:number){
    let result:string = ''
   switch (state) {
     
     case 4||3||2||1||10:
       result = "A Reparar"
       break;
     
     case 8||9||7||6||5:
       result = "Reparado"
       break;
    
   }
   return result
  }

}
