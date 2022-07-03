import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AmenitiesLink } from 'src/Models/AmenitiesLink';

@Injectable({
  providedIn: 'root'
})
export class AmenitiesLinkService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private _http: HttpClient) { }

  getAllAmenitiesLink(): Observable<AmenitiesLink[]> {
    return this._http.get<AmenitiesLink[]>(this.baseApiUrl + "/api/HotelAmenitiesLinks");
  }

  addAmenitiesLink(amenities: AmenitiesLink): Observable<AmenitiesLink> {
    return this._http.post<AmenitiesLink>(this.baseApiUrl + "/api/HotelAmenitiesLinks", amenities);
  }

  getByIdLink(id: number): Observable<AmenitiesLink> {
    return this._http.get<AmenitiesLink>(this.baseApiUrl + "/api/HotelAmenitiesLinks/" + id);
  }

  editAmenitiesLink(id: number, updateAmenities: AmenitiesLink): Observable<AmenitiesLink> {
    return this._http.put<AmenitiesLink>(this.baseApiUrl + "/api/HotelAmenitiesLinks/" + id, updateAmenities);
  }

  deleteAmenitiesLink(id: number): Observable<AmenitiesLink> {
    return this._http.delete<AmenitiesLink>(this.baseApiUrl + "/api/HotelAmenitiesLinks/" + id,);
  }

}
