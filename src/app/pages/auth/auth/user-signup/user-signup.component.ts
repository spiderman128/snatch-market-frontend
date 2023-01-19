import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { AuthWizardDirective } from '@directives/auth-wizard.directive';
import { AuthWizardItem } from 'src/app/shared/components/auth/auth-wizard-item';
import { FirstStepComponent } from './first-step/first-step.component';

import { select, Store} from '@ngrx/store';
import { setUserSignupData } from '../../store/auth.action';
import { selectUserSingupStepIndex, userSignupData } from '../../store/auth.select';
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
  userSignupData: any = {
    'Username':'',
    'FirstName': '',
    'LastName': '',
    'Email': '',
    'Password': '',
    'country': '',
    'code': '',
    'number':'',
    'identification':null,
    'currency': '',
    'payment': '',
    'Mobile': ''
  };
  userSignupData$ = this.store.pipe(select(userSignupData));
  constructor(private router: Router, private store: Store) {
  }

  ngOnInit(): void {
    this.selectedStepIndex$.subscribe(data => this.selectedStepIndex = data);
    this.userSignupData$.subscribe(data => this.userSignupData = data);
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
      console.log("=============", data);
      this.store.dispatch(setUserSignupData({user: data}));
      this.ngOnInit();
    });

  }
  onGetWizardItems() {
    return [
      new AuthWizardItem(
        FirstStepComponent,
        this.userSignupData
      ),
      new AuthWizardItem(
        SecondStepComponent,
        this.userSignupData
      ),
      new AuthWizardItem(
        ThirdStepComponent,
        this.userSignupData
      )
    ];
  }
}
