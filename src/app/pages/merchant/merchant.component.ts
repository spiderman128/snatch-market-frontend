import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { MerchantWizardDirective } from '@directives/merchant-wizard.directive';
import { MerchantWizardItem } from 'src/app/shared/components/merchant/merchant-wizard-item';
import { ArtworkComponent } from './artwork/artwork.component';
import { DynamicsComponent } from './dynamics/dynamics.component';
import { InformationComponent } from './information/information.component';
import { PriceComponent } from './price/price.component';
import { RewardsComponent } from './rewards/rewards.component';
import { SummaryComponent } from './summary/summary.component';

import { select, Store } from '@ngrx/store';
import { setStepIndexAction } from './store/merchant.action';
import { selectStepIndex } from './store/merchant.selector';

export interface WizardComponent {
  data: any,
  onNextTab: EventEmitter<any>
}
@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss']
})
export class MerchantComponent implements OnInit {

  @ViewChild(MerchantWizardDirective, {static: true}) merchantWizard! : MerchantWizardDirective;

  merchantWizardItems: MerchantWizardItem[] = [];
  currentIndex: number = 0;
  tabData: any = [
    {index : 1, title : "Information"},
    {index : 2, title : "Dynamics"},
    {index : 3, title : "Rewards"},
    {index : 4, title : "Artwork"},
    {index : 5, title : "Price"},
    {index : 6, title : "Summary"}
  ];

  stepIndex$ = this.store.pipe(select(selectStepIndex));

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.stepIndex$.subscribe(data => this.currentIndex = data);
    this.merchantWizardItems = this.getMerchantWizardItems();
    this.loadComponent();
  }

  loadComponent() {
    const merchantWizardItem = this.merchantWizardItems[this.currentIndex];
    const viewContainerRef = this.merchantWizard.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(merchantWizardItem.component);
    // optional ==== component data (@Input() data)
    (<WizardComponent>componentRef.instance).data = merchantWizardItem.data;
    (<WizardComponent>componentRef.instance).onNextTab.subscribe(data => {
      console.log("=========");
      this.ngOnInit();
    })
  }

  onHanldeTransitionTab(index : number) {
    this.store.dispatch(setStepIndexAction({stepIndex : index}));
    this.currentIndex = index;
    this.loadComponent();
  }
  getMerchantWizardItems() {
    return [
      new MerchantWizardItem(
        InformationComponent, 
        {}
      ),
      new MerchantWizardItem(
        DynamicsComponent, 
        {}
      ),
      new MerchantWizardItem(
        RewardsComponent, 
        {}
      ),
      new MerchantWizardItem(
        ArtworkComponent, 
        {}
      ),
      new MerchantWizardItem(
        PriceComponent, 
        {}
      ),
      new MerchantWizardItem(
        SummaryComponent, 
        {}
      )
    ];
  }
}
