import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user : User[];
  constructor(private http : HttpClient) { }

  baseUrl:string = 'http://localhost:3000/users';								

  getUserForLogin(userName: string){	
    console.log("in service : "+ JSON.stringify(this.http.get<User>(this.baseUrl+'/'+userName)))			
    return this.http.get<User>(this.baseUrl+'/'+userName);							
  }								
                    
    // Get All Users								
    getUsers() : Observable<User[]>{	
      return this.http.get<User[]>(this.baseUrl);								
    }								
      
}
