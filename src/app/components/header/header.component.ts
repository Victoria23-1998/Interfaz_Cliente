import { Component, OnInit } from '@angular/core';
import { ShowMenuService } from 'src/app/servicios/show-menu.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
   ShowMenu:Boolean=false


  constructor(public show:ShowMenuService, private router:Router) { }
 
  ngOnInit() {}
  
  logout(){
    Swal.fire({
      title: '¿Estas seguro de cerrar sesión?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result): any => {

      if (result.isConfirmed) {

        
        localStorage.removeItem('Usuario')
        this.router.navigate(['login']);

      } else if (result.isDenied) {
        console.log('no cerró sesión')
      }
    })
  
    
  }
 
}
