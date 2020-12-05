import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://backend-hood.herokuapp.com/hood';
const newUrl = 'https://backend-hood.herokuapp.com/api/hood/hood-id';

@Injectable({
  providedIn: 'root'
})
export class HoodService {

  constructor(private http:HttpClient) { }
  public getHouses(): Observable<any> {
    return this.http.get(baseUrl);
  }

  newHouse(data): Observable<any> {
    return this.http.post(baseUrl,data);
  }

  getHouse(id): Observable<any> {
    return this.http.get(`${newUrl}/${id}`);
  }

  updateHouse(id, data): Observable<any> {
    return this.http.put(`${newUrl}/${id}`, data);
  }

  deleteHouse(id): Observable<any> {
    return this.http.delete(`${newUrl}/${id}`);
  }
}
