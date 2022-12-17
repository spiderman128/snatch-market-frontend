// Angular modules
import { CommonModule }             from '@angular/common';
import { NgModule }                 from '@angular/core';

// Internal modules
import { AuthRoutingModule }        from './auth-routing.module';
import { SharedModule }             from '../../shared/shared.module';

// Components
import { AuthComponent }            from './auth/auth.component';
import { ForgotPasswordComponent }  from './auth/forgot-password/forgot-password.component';
import { LoginComponent }           from './auth/login/login.component';
import { ValidateAccountComponent } from './auth/validate-account/validate-account.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserSignupComponent } from './auth/user-signup/user-signup.component';
import { FirstStepComponent } from './auth/user-signup/first-step/first-step.component';

import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect } from './store/auth.effect';
import { SecondStepComponent } from './auth/user-signup/second-step/second-step.component';
import { ThirdStepComponent } from './auth/user-signup/third-step/third-step.component';

import { NgOtpInputModule } from  'ng-otp-input';
import { SuccessComponent } from './success/success.component';
import { MerchantComponent } from './merchant/merchant.component';
import { MFirstStepComponent } from './merchant/first-step/first-step.component';
import { MSecondStepComponent } from './merchant/second-step/second-step.component';
import { MThirdStepComponent } from './merchant/third-step/third-step.component';
import { MFourthStepComponent } from './merchant/fourth-step/fourth-step.component';
import { MFifthStepComponent } from './merchant/fifth-step/fifth-step.component';
import { MsignupSuccessComponent } from './msignup-success/msignup-success.component';

@NgModule({
  declarations    :
  [
    AuthComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ValidateAccountComponent,
    SignupComponent,
    UserSignupComponent,
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent,
    SuccessComponent,
    MerchantComponent,
    MFourthStepComponent,
    MFirstStepComponent,
    MSecondStepComponent,
    MThirdStepComponent,
    MFifthStepComponent,
    MsignupSuccessComponent
  ],
  imports         :
  [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    NgOtpInputModule,
    StoreModule.forFeature('authstate', authReducer),
    EffectsModule.forFeature([AuthEffect])
  ],
})
export class AuthModule { }
