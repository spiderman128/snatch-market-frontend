import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MerchantWizardDirective } from '@directives/merchant-wizard.directive';
import {select, Store} from '@ngrx/store';
import { MerchantWizardItem } from 'src/app/shared/components/merchant/merchant-wizard-item';
import { setStepIndexAction } from '../store/merchant.action';
import { selectArtistStepIndex, selectStepIndex } from '../store/merchant.selector';
import { ArtistConfirmComponent } from './artist-confirm/artist-confirm.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { AutoArtistsComponent } from './auto-artists/auto-artists.component';
import { ArtistHomeComponent } from './home/home.component';
import { VettedArtistsComponent } from './vetted-artists/vetted-artists.component';

export interface ArtistItemComponent {
  data: any,
  onNextItem: EventEmitter<any>
}
@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss']
})
export class ArtworkComponent implements OnInit {

  @Input() data: any;
  @Output() onNextTab: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild(MerchantWizardDirective, {static : true}) merchantArtworkHost! : MerchantWizardDirective;

  
  selectedStepIndex$ = this.store.pipe(select(selectStepIndex));
  selectedStepIndex = 0;

  artistItemList: MerchantWizardItem[] = [];

  selectedArtworkStepIndex$ = this.store.pipe(select(selectArtistStepIndex));
  selectedArtworkStepIndex = 0;

  constructor(private store : Store) { }

  ngOnInit(): void {
    this.selectedStepIndex$.subscribe(data => this.selectedStepIndex = data);
    this.selectedArtworkStepIndex$.subscribe(data => this.selectedArtworkStepIndex = data);
    this.artistItemList = this.getArtistItemList();
    this.loadComponent();
  }

  loadComponent () {
    const merchantWizardItem = this.artistItemList[this.selectedArtworkStepIndex];
    const viewContainerRef = this.merchantArtworkHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(merchantWizardItem.component);
    (<ArtistItemComponent>componentRef.instance).data = merchantWizardItem.data;
    (<ArtistItemComponent>componentRef.instance).onNextItem.subscribe(data => {
      if (data!.isFinal) {
        this.store.dispatch(setStepIndexAction({stepIndex : this.selectedStepIndex + 1}))
        this.onNextTab.emit('');
      } else {
        this.ngOnInit();
      }
    })
  }


  getArtistItemList() {
    return [
      new MerchantWizardItem(
        ArtistHomeComponent,
        {}
      ),
      new MerchantWizardItem(
        AutoArtistsComponent,
        {}
      ),
      new MerchantWizardItem(
        VettedArtistsComponent,
        {}
      ),
      new MerchantWizardItem(
        ArtistListComponent,
        {}
      ),
      new MerchantWizardItem(
        ArtistConfirmComponent,
        {}
      )
    ];
  }
}
