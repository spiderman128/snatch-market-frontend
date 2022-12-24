import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MegaRewardRoutingModule } from './mega-reward-routing.module';
import { MegaRewardComponent } from './mega-reward.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MegaRewardComponent
  ],
  exports :[
    MegaRewardComponent
  ],
  imports: [
    CommonModule,
    MegaRewardRoutingModule,
    SharedModule
  ]
})
export class MegaRewardModule { }
