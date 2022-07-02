import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Country } from 'src/Models/Country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private _http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    return this._http.get<Country[]>(this.baseApiUrl + "/api/Countries");
  }

  addCountries(addCountry: Country): Observable<Country> {
    return this._http.post<Country>(this.baseApiUrl + "/api/Countries", addCountry)
  }

  getByIdCountry(id: number): Observable<Country> {
    return this._http.get<Country>(this.baseApiUrl + "/api/Countries/" + id)
  }

  editCountries(id: number, updateCountry: Country): Observable<Country> {
    return this._http.put<Country>(this.baseApiUrl + "/api/Countries/" + id, updateCountry);
  }

  deleteCountries(id: number): Observable<Country> {
    return this._http.delete<Country>(this.baseApiUrl + "/api/Countries/" + id);
  }
}
