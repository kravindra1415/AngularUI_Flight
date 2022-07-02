import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Amenities } from 'src/Models/Amenities';

@Injectable({
  providedIn: 'root'
})
export class AmenitiesService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private _http: HttpClient) { }

  getAllAmenities(): Observable<Amenities[]> {
    return this._http.get<Amenities[]>(this.baseApiUrl + "/api/Amenities");
  }

  addAmenities(amenities: Amenities): Observable<Amenities> {
    return this._http.post<Amenities>(this.baseApiUrl + "/api/Amenities", amenities);
  }

  getById(id: number): Observable<Amenities> {
    return this._http.get<Amenities>(this.baseApiUrl + "/api/Amenities/" + id);
  }

  editAmenities(id: number, updateAmenities: Amenities): Observable<Amenities> {
    return this._http.put<Amenities>(this.baseApiUrl + "/api/Amenities/" + id, updateAmenities);
  }

  deleteAmenities(id: number): Observable<Amenities> {
    return this._http.delete<Amenities>(this.baseApiUrl + "/api/Amenities/" + id,);
  }

}
