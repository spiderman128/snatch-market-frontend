import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { AuthWizardDirective } from '@directives/auth-wizard.directive';
import { AuthWizardItem } from 'src/app/shared/components/auth/auth-wizard-item';
import { MFirstStepComponent } from './first-step/first-step.component';

import { select, Store } from '@ngrx/store';
import { setMerchantSignupStepIndex } from '../store/auth.action';
import { selectMerchantSignupStepIndex } from '../store/auth.select';
import { MSecondStepComponent } from './second-step/second-step.component';
import { MThirdStepComponent } from './third-step/third-step.component';
import { MFourthStepComponent } from './fourth-step/fourth-step.component';
import { MFifthStepComponent } from './fifth-step/fifth-step.component';
import { Router } from '@angular/router';

export interface AuthMerchantWizardComponent {
  data: any,
  onNext: EventEmitter<any>
}
@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss']
})
export class MerchantComponent implements OnInit {

  @ViewChild(AuthWizardDirective, {static: true}) merchantAuthHost!: AuthWizardDirective;
  wizardItems: AuthWizardItem[] = [];
  selectedStepIndex = 0;
  selectedStepIndex$ = this.store.pipe(select(selectMerchantSignupStepIndex));
  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.selectedStepIndex$.subscribe(data => this.selectedStepIndex = data);
    this.wizardItems = this.onGetComponents();
    this.onLoadComponent();
  }
  onLoadComponent() {
    const activeItem = this.wizardItems[this.selectedStepIndex];
    const viewContainerRef = this.merchantAuthHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(activeItem.component);
    (<AuthMerchantWizardComponent>componentRef.instance).data = activeItem.data;
    (<AuthMerchantWizardComponent>componentRef.instance).onNext.subscribe(data => {
      if (data!.isFinal) {
        this.router.navigate(['/auth/msignup-success']);
      } else {
        this.ngOnInit();
      }
      
    })
  }
  onGetComponents () {
    return [
      new AuthWizardItem(
        MFirstStepComponent,
        {
          stepIndex: 0
        }
      ),
      new AuthWizardItem(
        MSecondStepComponent,
        {
          stepIndex: 1
        }
      ),
      new AuthWizardItem(
        MThirdStepComponent,
        {
          stepIndex: 2
        }
      ),
      new AuthWizardItem(
        MFourthStepComponent,
        {
          stepIndex: 3
        }
      ),
      new AuthWizardItem(
        MFifthStepComponent,
        {
          stepIndex: 4
        }
      )
    ];
  }

}
