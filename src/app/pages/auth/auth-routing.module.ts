// Angular modules
import { NgModule }                 from '@angular/core';
import { Routes }                   from '@angular/router';
import { RouterModule }             from '@angular/router';

// Components
import { AuthComponent }            from './auth/auth.component';
import { ForgotPasswordComponent }  from './auth/forgot-password/forgot-password.component';
import { LoginComponent }           from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserSignupComponent } from './auth/user-signup/user-signup.component';
import { ValidateAccountComponent } from './auth/validate-account/validate-account.component';
import { MerchantComponent } from './merchant/merchant.component';
import { MsignupSuccessComponent } from './msignup-success/msignup-success.component';
import { SuccessComponent } from './success/success.component';

const routes : Routes = [
  {
    path      : '',
    component : AuthComponent,
    children  : [
      {
        path       : '',
        redirectTo : 'login',
        pathMatch  : 'full',
      },
      {
        path      : 'login',
        component : LoginComponent
      },
      {
        path      : 'signup',
        component : SignupComponent
      },
      {
        path      : 'user-signup',
        component : UserSignupComponent
      },
      {
        path      : 'forgot-password',
        component : ForgotPasswordComponent,
      },
      {
        path      : 'validate-account',
        component : ValidateAccountComponent,
      },
    ]
  },
  {
    path: 'success',
    component: SuccessComponent
  },
  {
    path: 'merchant',
    component: MerchantComponent
  },
  {
    path: "msignup-success",
    component : MsignupSuccessComponent
  }
];

@NgModule({
  imports :
  [
    RouterModule.forChild(routes)
  ],
  exports :
  [
    RouterModule
  ],
  providers :
  [
  ]
})
export class AuthRoutingModule { }
