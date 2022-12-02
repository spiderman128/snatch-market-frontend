import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MerchantWizardDirective } from '@directives/merchant-wizard.directive';
import { select, Store } from '@ngrx/store';
import { map, mergeMap, of, switchMap } from 'rxjs';
import { MerchantWizardItem } from 'src/app/shared/components/merchant/merchant-wizard-item';
import { setStepIndexAction } from '../store/merchant.action';
import { selectRewardStepIndex, selectStepIndex } from '../store/merchant.selector';
import { DefineInfoComponent } from './define-info/define-info.component';
import { DefineRewardComponent } from './define-reward/define-reward.component';
import { SelectNumberRewardComponent } from './select-number-reward/select-number-reward.component';


export interface RewardWizardComponent {
  data: any,
  onNextTab: EventEmitter<any>
}


@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class RewardsComponent implements OnInit {

  @Input() data: any;
  @Output() onNextTab: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild(MerchantWizardDirective, { static: true }) merchantRewardWizard!: MerchantWizardDirective;

  selectedStepIndex$ = this.store.pipe(select(selectStepIndex));
  selectedStepIndex = 0;

  selectedRewardStepIndex$ = this.store.pipe(select(selectRewardStepIndex));
  selectedRewardStepIndex = 0;

  merchantRewardWizardItems: any = [];
  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.selectedStepIndex$.subscribe(data => this.selectedStepIndex = data);
    this.selectedRewardStepIndex$.subscribe(data => this.selectedRewardStepIndex = data);
    this.merchantRewardWizardItems = this.getMerchantWizardItems();
    this.loadComponent();
  }

  loadComponent() {
    const merchantWizardItem = this.merchantRewardWizardItems[this.selectedRewardStepIndex];
    const viewContainerRef = this.merchantRewardWizard.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(merchantWizardItem.component);
    // optional ==== component data (@Input() data)
    (<RewardWizardComponent>componentRef.instance).data = merchantWizardItem.data;
    // (<RewardWizardComponent>componentRef.instance).onNextTab.pipe(
    //   switchMap(data => {
    //     console.log("===========switch");
    //     console.log(data);
    //     return of(data);
    //   })
    // ).subscribe(res => {
    //   console.log("res", res);
    //   if (res!.isArtwork) {
    //     this.store.dispatch(setStepIndexAction({ stepIndex: this.selectedStepIndex + 1 }));
    //     this.onNextTab.emit('');
    //   } else {
    //     this.ngOnInit();
    //   }
    // });
    (<RewardWizardComponent>componentRef.instance).onNextTab.subscribe(data => {
      if (data!.isArtwork) {
        this.store.dispatch(setStepIndexAction({ stepIndex: this.selectedStepIndex + 1 }));
        this.onNextTab.emit();
      } else {
        this.ngOnInit();
      }
    })
  }
  getMerchantWizardItems() {
    return [
      new MerchantWizardItem(
        SelectNumberRewardComponent,
        {}
      ),
      new MerchantWizardItem(
        DefineRewardComponent,
        {}
      ),
      new MerchantWizardItem(
        DefineInfoComponent,
        {}
      )
    ];
  }
}
