import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://backend-hood.herokuapp.com/business';
const newUrl = 'https://backend-hood.herokuapp.com/api/business/cat-id';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http:HttpClient) { }
  public getCats(): Observable<any> {
    return this.http.get(baseUrl);
  }

  newCat(data): Observable<any> {
    return this.http.post(baseUrl,data);
  }

  getCat(id): Observable<any> {
    return this.http.get(`${newUrl}/${id}`);
  }

}
