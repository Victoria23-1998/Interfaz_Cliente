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
    let result:string=''
    switch (state) {
      case 1||2||4||7:
        result = 'pendiente'
        break;
      case 3||8:
        result = 'curso'
        break;
      case 5:
        result = 'reparado'
        break;
      case 9||6:
        result = 'entregado'
        break;
    }
    return result
  }

  //estado del  equipo

  descripEstEquip(state:number){
    let result:string = ''
   switch (state) {
     case 1||2||3||4:
       result = "A reparar"
       break;
     
     case 5||6||7||8:
       result = "Reparado"
       break;
     case 9||10:
       result = "A reparar"
       break;
  }
   return result
  }
 
  
}

