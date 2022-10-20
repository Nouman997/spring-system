import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmplyeeService {

  baseURL = environment.baseURL;

  constructor(private http: HttpClient) {}

  registerEmployee(employeeDetail: Employee): Observable<any> {
    return this.http.post(this.baseURL + 'add-employee', employeeDetail);
  }

  getEmployees(): Observable<any> {
    return this.http.get(this.baseURL + 'get-employee');
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get(this.baseURL + 'get-single-employee/' + id);
  }

  deleteEmployee(id: number): Observable<any> {   
    return this.http.delete(this.baseURL + 'delete-employee/' + id);
  }

  updateEmployee(id: number, employeeDetail: Employee): Observable<any> {
    return this.http.put(this.baseURL + 'update-employee/' + id, employeeDetail);
  }
}
