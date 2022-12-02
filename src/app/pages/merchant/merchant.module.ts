import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantRoutingModule } from './merchant-routing.module';
import { MerchantComponent } from './merchant.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InformationComponent } from './information/information.component';
import { DynamicsComponent } from './dynamics/dynamics.component';
import { RewardsComponent } from './rewards/rewards.component';
import { ArtworkComponent } from './artwork/artwork.component';
import { PriceComponent } from './price/price.component';
import { SummaryComponent } from './summary/summary.component';

import { StoreModule } from '@ngrx/store';
import { merchantReducer } from './store/merchant.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MerchantEffect } from './store/merchant.effect';
import { SelectNumberRewardComponent } from './rewards/select-number-reward/select-number-reward.component';
import { DefineRewardComponent } from './rewards/define-reward/define-reward.component';
import { DefineInfoComponent } from './rewards/define-info/define-info.component';
import { ArtistHomeComponent } from './artwork/home/home.component';
import { AutoArtistsComponent } from './artwork/auto-artists/auto-artists.component';
import { VettedArtistsComponent } from './artwork/vetted-artists/vetted-artists.component';
import { ArtistListComponent } from './artwork/artist-list/artist-list.component';
import { ArtistConfirmComponent } from './artwork/artist-confirm/artist-confirm.component';
import { NgScrollbarModule, NG_SCROLLBAR_OPTIONS } from 'ngx-scrollbar';

@NgModule({
  declarations: [MerchantComponent, InformationComponent, DynamicsComponent, RewardsComponent, ArtworkComponent, PriceComponent, SummaryComponent, SelectNumberRewardComponent, DefineRewardComponent, DefineInfoComponent, ArtistHomeComponent, AutoArtistsComponent, VettedArtistsComponent, ArtistListComponent, ArtistConfirmComponent],
  exports: [MerchantComponent],
  imports: [
    CommonModule,
    SharedModule,
    MerchantRoutingModule,
    NgScrollbarModule,
    StoreModule.forFeature('merchantstate', merchantReducer),
    EffectsModule.forFeature([MerchantEffect])
  ]
})
export class MerchantModule { }
