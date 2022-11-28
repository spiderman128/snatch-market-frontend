import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketPlaceRoutingModule } from './market-place-routing.module';
import { MarketPlaceComponent } from './market-place.component';

import {StoreModule} from '@ngrx/store';
import { marketplaceReducer } from './store/marketplace.reducer';
import { SharedModule } from 'src/app/shared/shared.module';

import {EffectsModule} from '@ngrx/effects';
import { MarketplaceEffect } from './store/marketplace.effect';


@NgModule({
  declarations: [
    MarketPlaceComponent
  ],
  imports: [
    CommonModule,
    MarketPlaceRoutingModule,
    SharedModule,
    StoreModule.forFeature('marketplacestate', marketplaceReducer),
    EffectsModule.forFeature([MarketplaceEffect])
  ]
})
export class MarketPlaceModule { }
