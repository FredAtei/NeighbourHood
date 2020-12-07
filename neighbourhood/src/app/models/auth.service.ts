import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, shareReplay } from 'rxjs/operators';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiRoot = ' https://backend-hood.herokuapp.com/auth/signup/';

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  signup(Username: string,Email: string, Password1: string, Password2: string) {
    return this.http.post(this.apiRoot, { Username,Email,Password1,Password2 }).pipe(
      tap((response) => {
        console.log('Home response ', response);
      }),
      shareReplay()
    );
  }

  login(username: string, password: string) {
    return this.http
      .post(this.apiRoot.concat('token/'), { username, password })
      .pipe(
        tap((response) => {
          console.log({ response });
        }),
        shareReplay()
      );
  }
  
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh');
    localStorage.removeItem('expires_at');
  }
}
