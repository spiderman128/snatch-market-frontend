import { Component, EventEmitter, Input, OnInit, Output, AfterViewInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { setUserSignupStepIndex } from '../../../store/auth.action';
import { selectUserSingupStepIndex } from '../../../store/auth.select';

import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss']
})
export class FirstStepComponent implements OnInit, AfterViewInit {

  @Input() data: any;
  @Output() onNext: EventEmitter<any> = new EventEmitter<any>()

  selectedStepIndex: number = 0;
  selectedStepIndex$ = this.store.pipe(select(selectUserSingupStepIndex));

  isShowPassword: boolean = false;

  public formGroup!: FormGroup<{
    firstName: FormControl<string>,
    lastName: FormControl<string>,
    email: FormControl<string>,
    password: FormControl<string>,
  }>;
  constructor(private store: Store) {
  }


  ngOnInit(): void {
    this.selectedStepIndex$.subscribe(data => this.selectedStepIndex = data);
    this.initFormGroup();
  }

  ngAfterViewInit(): void {
    
  }
  initFormGroup(): void {
    this.formGroup = new FormGroup({
      firstName: new FormControl<string>(
        {
          value: this.data.firstName,
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      lastName: new FormControl<string>(
        {
          value: this.data.lastName,
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      email: new FormControl<string>(
        {
          value: this.data.email,
          disabled: false,
        },
        { validators: [Validators.required, Validators.email], nonNullable: true }
      ),
      password: new FormControl<string>(
        {
          value: this.data.password,
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
    });
  }
  onClickNext(event: any) {
    if (this.formGroup.valid) {
      this.store.dispatch(setUserSignupStepIndex({ stepIndex: this.selectedStepIndex + 1 }));
      this.data = {
        ...this.data, 
        FirstName: this.formGroup.controls.firstName.getRawValue(), 
        LastName: this.formGroup.controls.lastName.getRawValue(),
        Email: this.formGroup.controls.email.getRawValue(),
        Password: this.formGroup.controls.password.getRawValue(),
        Username: this.formGroup.controls.email.getRawValue()
      };
      this.onNext.emit(this.data);
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
