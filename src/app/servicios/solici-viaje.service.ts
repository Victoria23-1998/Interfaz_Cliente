import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipo } from '../interfaces/Equipo';
 import { Equipment } from '../interfaces/viaje';
@Injectable({
  providedIn: 'root'
})
export class SoliciViajeService {

  constructor(private http: HttpClient) { }

  setEquipo(idCliente:string,marca:string,modelo:string,falla:string,body:Equipo ): Observable<Equipment >{
    return this.http.post<Equipment>( `/api/Retirement?clientId=${idCliente}&mark=${marca}&model=${modelo}&failure=${falla}`,body)
  }
}
