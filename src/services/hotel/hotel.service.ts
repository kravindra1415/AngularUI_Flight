import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hotel } from 'src/Models/Hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private _http: HttpClient) { }

  getAllHotels(): Observable<Hotel[]> {
    return this._http.get<Hotel[]>(this.baseApiUrl + "/api/Hotels");
  }

  addHotel(addHotel: Hotel): Observable<Hotel> {
    return this._http.post<Hotel>(this.baseApiUrl + "/api/Hotels", addHotel);
  }

  getById(id: number): Observable<Hotel> {
    return this._http.get<Hotel>(this.baseApiUrl + "/api/Hotels/" + id);
  }

  editHotels(id: number, updateHotel: Hotel): Observable<Hotel> {
    return this._http.put<Hotel>(this.baseApiUrl + "/api/Hotels/" + id, updateHotel);
  }

  deleteHotel(id: number): Observable<Hotel> {
    return this._http.delete<Hotel>(this.baseApiUrl + "/api/Hotels/" + id);
  }


}
