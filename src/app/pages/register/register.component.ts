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

 

  constructor(private loginService: LoginServiceService, private router:Router) {
  
   }
 
  //Método Get
  ngOnInit(): void {
    
  }
  //Método Post
  sendData() {
   this.user={
    id:0,
    email:this.profileForm.controls['email'].value,
    fullName:this.profileForm.controls['fullName'].value,
    address:this.profileForm.controls['address'].value,
    cellPhone:this.profileForm.controls['cellPhone'].value,
    isAccepted:true,
    isDeleted:false,
    observations: '',
    password:this.profileForm.controls['password'].value,
    vehicle: this.vehicle,
    rol:this.rol,
   }
   
    this.loginService.addUsers(this.user).subscribe(respuesta => {
      console.log(respuesta)
      Swal.fire({
        title: '¡Resgistro Exitoso!',
        text: 'Pulse para continuar',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    },error=>{
      console.log(error.error)
      
    });
    
   this.router.navigate(['login'])
  }
  
  // uso validators para hacer las validaciones del formulario 
  profileForm = new FormGroup({

    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    address: new FormControl('', [Validators.required]),
    cellPhone: new FormControl('', [Validators.required]),
  

  });


showAlert(){
  Swal.fire({
    title: '¡Resgistro Exitoso!',
    text: 'Pulse para continuar',
    icon: 'success',
    confirmButtonText: 'Ok'
  })
}

}
