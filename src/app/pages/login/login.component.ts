import { Component,OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/servicios/local-storage.service';
import { LoginServiceService } from 'src/app/servicios/login-service.service';
import { DataUserLogin, User } from 'src/app/interfaces/user';
import Swal from 'sweetalert2';
import { Welcome } from 'src/app/interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
 
  userLogin:User={
    id:0,
    email:'',
    fullName:'',
    address:'',
  }
  hide = true;

  constructor(private router: Router, private localStorageService:LocalStorageService, 
    private loginService: LoginServiceService ) { 
    
  }

  ngOnInit(): void {}

  loginForm = new FormGroup ({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
})

  async onSubmit(){
   
   this.loginService.getLogin(this.loginForm.value.email,this.loginForm.value.password).subscribe((data:Welcome)=>{
       
      this.userLogin={
        id: data.id,
        fullName: data.fullName,
        email: data.email,
        address:data.address,
       };
       
       this.localStorageService.setLocal('Usuario',this.userLogin);
       this.router.navigate(['home']);

      },(error)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error,
        })
      });
    }
      
  }
     
 
 
  

