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

      // Get User By Id								
      getUserById(id: string){								
        return this.http.get<User>(this.baseUrl+'/'+id);								
      }	
  getUserForLogin(userName: string){	
    console.log("in service : "+ JSON.stringify(this.http.get<User>(this.baseUrl+'/'+userName)))			
    return this.http.get<User>(this.baseUrl+'/'+userName);							
  }								
                    
    // Get All Users								
    getUsers() : Observable<User[]>{	
      return this.http.get<User[]>(this.baseUrl);								
    }	
    
  // createUser(user:User){
  //   console.log("from service")
  //   console.log(user)
  //   console.log(this.http.post(this.baseUrl, user))
  //   return this.http.post(this.baseUrl, user);

  // }
         // Create User								
    createUser(user: User) {								
      return this.http.post(this.baseUrl, user);								
    }		
}
