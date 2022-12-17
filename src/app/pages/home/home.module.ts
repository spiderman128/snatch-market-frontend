// Angular modules
import { CommonModule }      from '@angular/common';
import { NgModule }          from '@angular/core';

// Internal modules
import { SharedModule }      from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

// Components
import { HomeComponent }     from './home.component';
// drag scroll 
import { DragScrollModule } from 'ngx-drag-scroll';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { homeReducer } from './store/home.reducer';
import { HomeEffect } from './store/home.effects';
@NgModule({
  imports :
  [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    DragScrollModule,
    StoreModule.forFeature('homestates', homeReducer),
    EffectsModule.forFeature([HomeEffect])
  ],
  declarations :
  [
    HomeComponent,
  ],
})
export class HomeModule { }
