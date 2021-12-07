import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Local } from 'src/app/interfaces/local';
import { ShowMenuService } from 'src/app/servicios/show-menu.service';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  usuarioNombre:string=''

  constructor(private showMenuService:ShowMenuService, private localStorageService:LocalStorageService,private router:Router) { 
    
  }
 
  ngOnInit(): void {
   
   
    let local: Local = this.localStorageService.getLocal('Usuario')
    this.usuarioNombre= local.fullName as string
    /*uso showMenu para poder terminar el requerimiento de redireccionar
    si no inicio sesión luego sera mejorado*/
    if(!this.showMenuService.showMenu())this.router.navigate(['login'])
    
    
  }
  
  
  
  
  
  
}
