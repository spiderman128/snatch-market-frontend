import { Component, EventEmitter, Input, OnInit, Output, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { setUserSignupStepIndex, signupUser } from '../../../store/auth.action';
import { selectUserSingupStepIndex } from '../../../store/auth.select';

import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { setAPIStatus } from 'src/app/shared/store/app.action';
import { Appstate } from 'src/app/shared/store/app.state';
import { selectAppState } from 'src/app/shared/store/app.selector';

import { ToastManager } from '@blocks/toast/toast.manager';
import { Subject, takeUntil } from 'rxjs';
import { AppService } from '@services/app.service';
@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.scss']
})
export class ThirdStepComponent implements OnInit, OnDestroy{

  @Input() data: any;
  @Output() onNext: EventEmitter<any> = new EventEmitter<any>()

  selectedStepIndex: number = 0;
  selectedStepIndex$ = this.store.pipe(select(selectUserSingupStepIndex));

  // form
  formGroup!: FormGroup<{
    currency: FormControl<string>,
    payment: FormControl<string>,
  }>;

  destroy$ = new Subject<void>()

  constructor(
    private store: Store,
    private router: Router,
    private toastManager: ToastManager,
    private appStore: Store<Appstate>
  ) {
  }

  ngOnInit(): void {
    this.selectedStepIndex$.subscribe(data => this.selectedStepIndex = data);
    this.initFormGroup();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  initFormGroup(): void {
    this.formGroup = new FormGroup({
      currency: new FormControl<string>(
        {
          value: this.data.curreny,
          disabled: false,
        },
        { validators: [], nonNullable: true }
      ),
      payment: new FormControl<string>(
        {
          value: this.data.payment,
          disabled: false,
        },
        { validators: [], nonNullable: true }
      )
    });
  }
  onClickNext(event: any) {
    if (this.formGroup.valid) {
      this.data = {
        ...this.data,
        currency: this.formGroup.controls.currency.getRawValue(),
        payment: this.formGroup.controls.payment.getRawValue(),
        Mobile: this.data.code + this.data.number
      };
      this.store.dispatch(setUserSignupStepIndex({ stepIndex: 0 }));

      // sign up
      console.log("user sign up data", this.data);
      this.store.dispatch(signupUser({ user: this.data }));

      let apiStatus$ = this.appStore.pipe(select(selectAppState));
      apiStatus$.pipe(takeUntil(this.destroy$)).subscribe((appState) => {
        console.log('app status', appState);
        if (appState.apiStatus == 'Success') {
          this.appStore.dispatch(
            setAPIStatus({
              apiStatus: { apiResponseMessage: '', apiStatus: '' },
            })
          );
          this.toastManager.quickShow('Successfully Signed up.', 'success');
          // this.router.navigate(['/auth/validate-account']);
          this.router.navigate(['/auth/user-signup'], { replaceUrl: true });
          return;
        } else if (appState.apiStatus == 'Error') {
          this.toastManager.quickShow(appState.apiResponseMessage);
          this.appStore.dispatch(
            setAPIStatus({
              apiStatus: { apiResponseMessage: '', apiStatus: '' },
            })
          );
          this.router.navigate(['/auth/user-signup'], { replaceUrl: true });
          return;
        }
      });
    } else {
      this._validateForm(this.formGroup);
    }

  }

  onClickPrev(event: any) {
    this.store.dispatch(setUserSignupStepIndex({ stepIndex: this.selectedStepIndex - 1 }));
    this.onNext.emit(this.data);
  }
  _validateForm(form: FormGroup): boolean {
    if (!form.valid) {
      for (let i in form.controls) {
        form.controls[i].markAsTouched();
      }
      return false;
    } else {
      return true;
    }
  }
}
