import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { Local } from 'src/app/interfaces/local';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { EstadoViajeService } from 'src/app/servicios/estado-viaje.service';
import {MatTableDataSource} from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-estado-viajes',
  templateUrl: './estado-viajes.component.html',
  styleUrls: ['./estado-viajes.component.scss']
})

export class EstadoViajesComponent implements OnInit,AfterViewInit {
  
  isloading:boolean=true

 constructor(private estadoViajeService: EstadoViajeService, private localStorageService:LocalStorageService) { }

  displayedColumns: string[] = ['fecha', 'marca', 'modelo', 'estadoEqui','EstadoEnvio'];
  dataSource = new MatTableDataSource();
  
  
  @ViewChild(MatPaginator) paginator!:MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  local:Local={}
  userId:string= ''
  
  
 
  ngOnInit(): void {
    this.local= this.localStorageService.getLocal('Usuario')
    this.userId = this.local.id as string
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
        result = "Pendiente"
        break;
      case 5:
        result = "Reparado"
        break;
      case 6:
        result = "Entrega asignada"
        break;
      case 7:
        result = "Pendiente"
        break;
      case 8:
        result = "En curso"
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
       result = "A reparar"
       break;
     case 3:
       result = "A reparar"
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
       result = "A reparar"
       break;
     case 10:
       result = "A reparar"
       break;
     default:
       break;
    
   }
   return result
  }
 
  

  
}

