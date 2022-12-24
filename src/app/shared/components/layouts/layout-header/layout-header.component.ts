// Angular modules
import { Component, Input }   from '@angular/core';
import { OnInit }      from '@angular/core';
import { Router }      from '@angular/router';

import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
// Internal modules
import { environment } from '@env/environment';

import { AppService } from '@services/app.service';
import { TokenStorageService } from '@services/token-storage.service';

@Component({
  selector    : 'app-layout-header',
  templateUrl : './layout-header.component.html',
  styleUrls   : ['./layout-header.component.scss']
})
export class LayoutHeaderComponent implements OnInit
{
  @Input() theme : 'light' | 'dark' = 'dark';
  @Input() isMegaReward: boolean = false;
  public appName         : string  = environment.appName;
  public isMenuCollapsed : boolean = true;

  faSearch = faSearch;
  faShoppingCart = faShoppingCart;
  faCircleUser = faCircleUser;
  isLoggedIn: boolean = false;
  constructor
  (
    private router : Router,
    private appService: AppService,
    private tokenStorgeService: TokenStorageService
  )
  {

  }

  public ngOnInit() : void
  {
    this.isLoggedIn = this.appService.getUserLoggedIn();
  }

  public async onClickLogout() : Promise<void>
  {
    // NOTE Redirect to login
    this.tokenStorgeService.signOut();
    this.router.navigate(['/auth/login'], {replaceUrl: true});
  }

}
