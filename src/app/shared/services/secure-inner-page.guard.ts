import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SecureInnerPageGuard implements CanActivate {
  constructor(public tokenStorage: TokenStorageService, public router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.tokenStorage.getToken() == null) {
      this.router.navigate(['/home']);
    }
    return true;
  }

}
