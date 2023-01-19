import { Injectable } from '@angular/core';

const TOKEN_KEY = 'snatch-auth-token';
const USER_KEY = 'snatch-auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut() : void {
    window.localStorage.clear();
  }

  public saveToken(token : string | null) : void {
    window.localStorage.removeItem(TOKEN_KEY);
    if (token != null) window.localStorage.setItem(TOKEN_KEY, token!);
  }

  public getToken() : string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }
  public saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    if (user != null) window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
}
