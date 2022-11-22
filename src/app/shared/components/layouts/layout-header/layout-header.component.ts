// Angular modules
import { Component, Input }   from '@angular/core';
import { OnInit }      from '@angular/core';
import { Router }      from '@angular/router';

import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
// Internal modules
import { environment } from '@env/environment';


@Component({
  selector    : 'app-layout-header',
  templateUrl : './layout-header.component.html',
  styleUrls   : ['./layout-header.component.scss']
})
export class LayoutHeaderComponent implements OnInit
{
  @Input() theme : 'light' | 'dark' = 'dark';

  public appName         : string  = environment.appName;
  public isMenuCollapsed : boolean = true;

  faSearch = faSearch;
  faShoppingCart = faShoppingCart;
  faCircleUser = faCircleUser;
  constructor
  (
    private router : Router,
  )
  {

  }

  public ngOnInit() : void
  {

  }

  // -------------------------------------------------------------------------------
  // ---- NOTE Init ----------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // ---- NOTE Actions -------------------------------------------------------------
  // -------------------------------------------------------------------------------

  public async onClickLogout() : Promise<void>
  {
    // NOTE Redirect to login
    this.router.navigate(['/auth/login']);
  }

  // -------------------------------------------------------------------------------
  // ---- NOTE Computed props ------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // ---- NOTE Helpers -------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // ---- NOTE Requests ------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // ---- NOTE Subscriptions -------------------------------------------------------
  // -------------------------------------------------------------------------------

}
