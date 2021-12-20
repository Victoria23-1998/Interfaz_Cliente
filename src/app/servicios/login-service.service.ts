import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Welcome } from '../interfaces/login';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  
  constructor(private http: HttpClient) {
    
   }

  public getUsers(): Observable<Welcome> {
    //GET
    return this.http.get<Welcome>('/api/Users?userOperation=1')
                    
  }
  public Login(email:string, password:string): Observable<Welcome>{
    return this.http.get<Welcome>(`/api/Login?email=${email}&password=${password}`)
                    
  }
  //registro
  public addUsers(body: Welcome): Observable<Welcome> {
    return this.http.post<Welcome>('/api/Users', body)
  }

  

}
