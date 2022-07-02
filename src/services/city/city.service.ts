import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City } from 'src/Models/City';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private _http: HttpClient) { }

  getCities(): Observable<City[]> {
    return this._http.get<City[]>(this.baseApiUrl + "/api/Cities")
  }

  addCities(addCity: City): Observable<City> {
    return this._http.post<City>(this.baseApiUrl + "/api/Cities", addCity)
  }

  getByIdCity(id: number): Observable<City> {
    return this._http.get<City>(this.baseApiUrl + "/api/Cities/" + id)
  }

  editCities(id: number, updateCity: City): Observable<City> {
    return this._http.put<City>(this.baseApiUrl + "/api/Cities/" + id, updateCity);
  }

  deleteCity(id: number): Observable<City> {
    return this._http.delete<City>(this.baseApiUrl + "/api/Cities/" + id);
  }


}
