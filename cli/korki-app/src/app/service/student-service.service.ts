import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../objects/Student';

@Injectable({
  providedIn: 'root',
})
export class StudentServiceService {
  private URL = environment.apiBaseUrl;
  constructor(private httpClient: HttpClient) {}

  public getAllEmployee(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.URL}/students`);
  }
}
