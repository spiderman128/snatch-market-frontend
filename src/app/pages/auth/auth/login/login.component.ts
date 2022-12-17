// Angular modules
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { login } from '../../store/auth.action';

import { setAPIStatus } from 'src/app/shared/store/app.action';
import { Appstate } from 'src/app/shared/store/app.state';
import { selectAppState } from 'src/app/shared/store/app.selector';

import { ToastManager } from '@blocks/toast/toast.manager';
import {  Subject,takeUntil } from 'rxjs';
import { AppService } from '@services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public formGroup !: FormGroup<{
    email: FormControl<string>,
    password: FormControl<string>,
  }>;

  isLoading: boolean = false;
  destroy$ = new Subject<void>();
  constructor(
      private router: Router,
      private store: Store,
      private toastManager: ToastManager,
      private appStore: Store<Appstate>,
      private appService: AppService
  ) {
    if(appService.getUserLoggedIn()) {
      router.navigate(['/home'], {replaceUrl: true});
      return;
    }
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.initFormGroup();

  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnInit(): void {
  }

  // -------------------------------------------------------------------------------
  // ---- NOTE Init ----------------------------------------------------------------
  // -------------------------------------------------------------------------------

  private initFormGroup(): void {
    // this.formGroup = new FormGroup({
    //   email      : new FormControl<string>({
    //     value    : '',
    //     disabled : false
    //   }, { validators : [Validators.required, Validators.email], nonNullable : true }),
    //   password   : new FormControl<string>({
    //     value    : '',
    //     disabled : false
    //   }, { validators : [Validators.required], nonNullable : true })
    // });
    this.formGroup = new FormGroup({
      email: new FormControl<string>({
        value: '',
        disabled: false
      }, { validators: [Validators.required], nonNullable: true }),
      password: new FormControl<string>({
        value: '',
        disabled: false
      }, { validators: [Validators.required], nonNullable: true })
    });
  }

  // -------------------------------------------------------------------------------
  // ---- NOTE Actions -------------------------------------------------------------
  // -------------------------------------------------------------------------------
  onClickSubmit(event: any) {
    event.preventDefault();
    console.log("=======5");
  }
  onLogin(event: any) {
    if (!this.isLoading) {
      this.isLoading = true;
      if (this.formGroup.valid) {
        const email = this.formGroup.controls.email.getRawValue();
        const password = this.formGroup.controls.password.getRawValue();
        const user = {
          user: email,
          password: password
        };
        this.store.dispatch(login({ user }));

        let apiStatus$ = this.appStore.pipe(select(selectAppState));
        apiStatus$.pipe(takeUntil(this.destroy$)).subscribe(appState => {
          this.isLoading = false;
          if (appState.apiStatus == "Success") {
            this.appStore.dispatch(
              setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
            );
            this.toastManager.quickShow("Successfully Logged In.", 'success');
            this.router.navigate(['/home'], { replaceUrl: true });
            return;
          } else if (appState.apiStatus == "Error") {
            this.toastManager.quickShow(appState.apiResponseMessage);
            this.appStore.dispatch(
              setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
            );
            this.router.navigate(['/auth'], { replaceUrl: true });
            return;
          }

        })
      } else {
        this.isLoading = false;
        this._validateForm(this.formGroup);
      }
    }
  }
  _validateForm(form: FormGroup): boolean {
    if (!form.valid) {
      for (let i in form.controls) {
        form.controls[i].markAsTouched()
      }
      return false
    }
    else {
      return true
    }
  }
}
