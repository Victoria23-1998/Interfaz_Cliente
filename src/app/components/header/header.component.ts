import { Component, OnInit } from '@angular/core';
import { ShowMenuService } from 'src/app/servicios/show-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
   ShowMenu:Boolean=false


  constructor(public show:ShowMenuService) { }
 
  ngOnInit() {}
  
  logout(){
    localStorage.removeItem('Usuario')
    
  }
 
}
