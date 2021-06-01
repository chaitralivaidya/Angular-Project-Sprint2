import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Questions } from '../models/Questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  question : Questions[];
  constructor(private http : HttpClient) { }

  baseUrl:string = 'http://localhost:3000/questions';		

      // Get All Users								
      getQuestions() : Observable<Questions[]>{	
        return this.http.get<Questions[]>(this.baseUrl);								
      }	
      
}
