import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Welcome } from '../interfaces/login';

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

  

}
