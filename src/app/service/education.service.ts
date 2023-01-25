import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Education } from '../models/education';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http:HttpClient) { }
  add(edu:Education ){
 return this.http.post(`${environment.ApiUrl}/education`,edu);
  }
  update(edu:Education){
    return this.http.put(`${environment.ApiUrl}/education/${edu.id}`, edu);
  }
  delete(edu:Education){
      return this.http.delete(`${environment.ApiUrl}/education/${edu.id}`);
  }
  get(edu:Education){
    return this.http.get(`${environment.ApiUrl}/education/${edu.id}`);
  }
  getAll(){
    return this.http.get(`${environment.ApiUrl}/education`);    
  }
}
