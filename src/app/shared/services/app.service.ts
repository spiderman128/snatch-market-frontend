import { Injectable } from '@angular/core';

import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable, of } from 'rxjs';
import { environment } from '@env/environment';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private userLoggedIn = new Subject<boolean>();
  baseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
    this.userLoggedIn.next(false);
  }

  setUserLoggedIn(userLoggedIn: boolean) {
    this.userLoggedIn.next(userLoggedIn);
  }

  getUserLoggedIn() {
    const token = this.tokenStorage.getToken();
    // console.log("token", token, token != null);
    if (token != null) {
      return true;
    } else {
      return false;
    }
    // return this.userLoggedIn.asObservable();
  }

  login(user: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    return this.http.post(this.baseUrl + 'Accounts/Login', user, options).pipe(
      map((response: any) => response),
      catchError(err => {
        console.log(err)
        return of(err);
      })
    );
  }
  signupUser(user: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    return this.http.post(this.baseUrl + 'Accounts/CreateUserAccount', { user }, options).pipe(
      map((response: any) => response),
      catchError(error => {
        console.log("error", error);
        return of(error);
      })
    );
  }
}
