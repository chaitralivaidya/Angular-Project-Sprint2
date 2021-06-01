import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accounts: Account[];
  constructor(private http :HttpClient) { }

  baseUrl:string = 'http://localhost:3000/account';		
  	
  createAccount(account : Account){
    return this.http.post(this.baseUrl, account)
  }
  getAccountByNumber(accountnNumber : number){
    return this.http.get<Account>(this.baseUrl + '?accountNumber=' + accountnNumber)
  }
    // Get All Users								
    getUsers() : Observable<Account[]>{	
      return this.http.get<Account[]>(this.baseUrl);								
    }	
}
