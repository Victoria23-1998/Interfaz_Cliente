import { Injectable } from '@angular/core';
import { Local } from '../interfaces/local';
import { User } from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
 
  constructor() {

   }
  
   setLocal(key: string, data: User){
     localStorage.setItem(key, JSON.stringify(data))
   }

   getLocal(key: string):Local{
    if(localStorage.getItem(key) !== undefined){
      return JSON.parse(localStorage.getItem(key) ||'')
    }else{
      return {}
    }
   
   }
   
}

