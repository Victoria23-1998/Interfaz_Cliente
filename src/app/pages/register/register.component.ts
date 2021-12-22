import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Rol, Welcome } from 'src/app/interfaces/login';
import { LoginServiceService } from 'src/app/servicios/login-service.service';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/interfaces/login';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  rol: Rol = {
    id:3,
    name: 'Usuario Final',
    isDeleted:0
  }
 vehicle:Vehicle={
  id:0,
  name: '',
  isDeleted:0
 }
  user: Welcome = {
    
    email:'',
    fullName:'',
    address: '',
    cellPhone:'',
    isAccepted:true,
    isDeleted:false,
    observations: '',
    password:'',
    vehicle:this.vehicle,
    rol: this.rol,
    
  };

 constructor(private loginService: LoginServiceService, private router:Router) {}
 
 
  ngOnInit(): void {}
  
  sendData() {
   this.user={
    id:0,
    email:this.profileForm.value.email,
    fullName:this.profileForm.value. fullName,
    address:this.profileForm.value.address,
    cellPhone:this.profileForm.value.cellPhone,
    isAccepted:true,
    isDeleted:false,
    observations: '',
    password:this.profileForm.value.password,
    vehicle: this.vehicle,
    rol:this.rol,
   }
   
    this.loginService.addUsers(this.user).subscribe(respuesta => {
      
      Swal.fire({
        title: '¡Resgistro Exitoso!',
        text: 'Pulse para continuar',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    },error=>{
      if(error.error = 'Usuario ya existe'){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El Usuario ya existe ',
        })
      }
    });
    
   this.router.navigate(['login'])
  }
  
 
  profileForm = new FormGroup({

    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    address: new FormControl('', [Validators.required]),
    cellPhone: new FormControl('', [Validators.required]),
  

  });

}
