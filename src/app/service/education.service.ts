import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Education } from '../models/education';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http: HttpClient) { }
  add(edu: Education ) {
 return this.http.post(`${environment.ApiUrl}/education`, edu);
  }
  update(edu: Education) {
    return this.http.put(`${environment.ApiUrl}/education/${edu.id}`, edu);
  }
  delete(id: number) {
      return this.http.delete(`${environment.ApiUrl}/education/${id}`);
  }
  get(id: number) {
    return this.http.get(`${environment.ApiUrl}/education/${id}`);
  }
  getAll() {
    return this.http.get(`${environment.ApiUrl}/education`);
  }
}
