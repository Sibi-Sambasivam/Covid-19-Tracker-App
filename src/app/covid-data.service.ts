import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {

  private apiUrl = 'https://api.covid19api.com';  

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<any> {
    return this.http.get(`${this.apiUrl}/countries`);
  }

  getCountryData(countrySlug: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/total/country/${countrySlug}`);
  }
}
