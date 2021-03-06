import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SETTINGS } from './config/student-config';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor( private http: HttpClient ) { }

  getStudentData(): Observable<any> {
    return this.http.get(SETTINGS.api.apiEndpoint);
  }
}
