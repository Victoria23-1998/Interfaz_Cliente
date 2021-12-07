import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipment } from '../interfaces/viaje';
@Injectable({
  providedIn: 'root'
})
export class EstadoViajeService {

  constructor(private http:HttpClient) { }

  getEquipo(idCliente:any): Observable<Equipment>{
    return this.http.get<Equipment>(`/api/Equipment?clientId=${idCliente}`)
                    
  }
}
