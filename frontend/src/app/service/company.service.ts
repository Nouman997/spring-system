import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from '../interfaces/company';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  baseURL = environment.baseURL;

  constructor(private http: HttpClient) {}

  registerCompany(companyDetail: Company): Observable<any> {
    return this.http.post(this.baseURL + 'add-company', companyDetail);
  }

  getCompanies(): Observable<any> {
    return this.http.get(this.baseURL + 'get-company');
  }

  getCompany(id: number): Observable<any> {
    return this.http.get(this.baseURL + 'get-single-company/' + id);
  }

  deleteCompany(id: number): Observable<any> {    
    return this.http.delete(this.baseURL + 'delete-company/' + id);
  }

  updateCompany(id: number, companyDetial: Company): Observable<any> {
    return this.http.put(this.baseURL + 'update-company/' + id, companyDetial);
  }
}
