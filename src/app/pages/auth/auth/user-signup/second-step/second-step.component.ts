import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { setUserSignupStepIndex } from '../../../store/auth.action';
import { selectUserSingupStepIndex } from '../../../store/auth.select';

import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss']
})
export class SecondStepComponent implements OnInit {

  @Input() data: any;
  @Output() onNext: EventEmitter<any> = new EventEmitter<any>()

  selectedStepIndex: number = 0;
  selectedStepIndex$ = this.store.pipe(select(selectUserSingupStepIndex));

  // form
  formGroup!: FormGroup<{
    country: FormControl<string>,
    code: FormControl<string>,
    number: FormControl<string>,
    identification: FormControl<string>
  }>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.selectedStepIndex$.subscribe(data => this.selectedStepIndex = data);
    this.initFormGroup();
  }

  initFormGroup(): void {
    this.formGroup = new FormGroup({
      country: new FormControl<string>(
        {
          value: this.data.country,
          disabled: false,
        },
        { validators: [], nonNullable: true }
      ),
      code: new FormControl<string>(
        {
          value: this.data.code,
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      number: new FormControl<string>(
        {
          value: this.data.number,
          disabled: false,
        },
        { validators: [Validators.required], nonNullable: true }
      ),
      identification: new FormControl<string>(
        {
          value: this.data.identification,
          disabled: false,
        },
        { validators: [], nonNullable: true }
      ),
    });
  }
  onClickNext(event: any) {
    if (this.formGroup.valid) {
      this.store.dispatch(setUserSignupStepIndex({ stepIndex: this.selectedStepIndex + 1 }));
      this.data = {
        ...this.data, 
        country: this.formGroup.controls.country.getRawValue(), 
        code: this.formGroup.controls.code.getRawValue(),
        number: this.formGroup.controls.number.getRawValue(),
        identification: this.formGroup.controls.identification.getRawValue(),
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
