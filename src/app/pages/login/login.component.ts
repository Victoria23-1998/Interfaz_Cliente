import { Component,OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { Login } from 'src/app/interfaces/login';
import { Router,RouterStateSnapshot,NavigationExtras } from '@angular/router';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { LoginServiceService } from 'src/app/servicios/login-service.service';
import { Welcome } from 'src/app/interfaces/login';
import { User } from 'src/app/interfaces/user';
import { ShowMenuService } from 'src/app/servicios/show-menu.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  usuario:User={
    id:0,
    email:'',
    fullName:'',
    adress:'',
  }

  constructor(private router: Router, private localStorageService:LocalStorageService, 
    private loginService: LoginServiceService ) { 
    
  }

  ngOnInit(): void {}

  login:Login ={
    email:'',
    password:''
  }


  hide = true;
 
  Login = new FormGroup ({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  public messageError=''

  onSubmit(){
      
      this.loginService.Login(this.Login.controls['email'].value,this.Login.controls['password'].value).subscribe((data:Welcome)=>{
        
        this.usuario.id= data.id;
        this.usuario.fullName= data.fullName;
        this.usuario.email= data.email;
        this.usuario.adress= data.address;

        this.localStorageService.setLocal('Usuario',this.usuario)

        this.router.navigate(['home'])

      },(error)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El usuario no existe ',
        })
      });
     
     
      
  }
 
 
  

}