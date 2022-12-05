import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { AuthWizardDirective } from '@directives/auth-wizard.directive';
import { AuthWizardItem } from 'src/app/shared/components/auth/auth-wizard-item';
import { FirstStepComponent } from './first-step/first-step.component';

import { select, Store} from '@ngrx/store';
import { setUserSignupStepIndex } from '../../store/auth.action';
import { selectUserSingupStepIndex } from '../../store/auth.select';
import { SecondStepComponent } from './second-step/second-step.component';
import { ThirdStepComponent } from './third-step/third-step.component';

export interface WizardComponent {
  data : any,
  onNext: EventEmitter<any>
}

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {

    // wizard setting
  @ViewChild(AuthWizardDirective, {static: true}) signupWizardHost!: AuthWizardDirective;
  wizardItems: AuthWizardItem[] = [];
  
  selectedStepIndex: number = 0;
  selectedStepIndex$ = this.store.pipe(select(selectUserSingupStepIndex));
  constructor(private router: Router, private store: Store) {
  }

  ngOnInit(): void {
    this.selectedStepIndex$.subscribe(data => this.selectedStepIndex = data);
    this.wizardItems = this.onGetWizardItems();
    this.onLoadComponent();
  }
  // -------------------------------------------------------------------------------
  // ---- NOTE Init ----------------------------------------------------------------
  // -------------------------------------------------------------------------------

  onLoadComponent() {
    const activeWizardItem = this.wizardItems[this.selectedStepIndex];
    const viewContainerRef = this.signupWizardHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(activeWizardItem.component);

    (<WizardComponent>componentRef.instance).data = activeWizardItem.data;
    (<WizardComponent>componentRef.instance).onNext.subscribe(data => {
      console.log("=============");
      this.ngOnInit();
    });

  }
  onGetWizardItems() {
    return [
      new AuthWizardItem(
        FirstStepComponent,
        {}
      ),
      new AuthWizardItem(
        SecondStepComponent,
        {}
      ),
      new AuthWizardItem(
        ThirdStepComponent,
        {}
      )
    ];
  }
}
