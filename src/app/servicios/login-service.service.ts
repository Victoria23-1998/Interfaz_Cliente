import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { Welcome } from '../interfaces/login';
import { DataUserLogin} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {

  
  constructor(private http: HttpClient) {
    
   }

  public getUsers(): Observable<Welcome> {
    
    return this.http.get<Welcome>('/api/Users?userOperation=1')
                    
  }
  

  public getLogin(email:string, password:string): Observable<Welcome>{
    return this.http.get<Welcome>(`/api/Login?email=${email}&password=${password}`)
                    
  }
  
  public addUsers(body: Welcome): Observable<Welcome> {
    return this.http.post<Welcome>('/api/Users', body)
  }

  

}

