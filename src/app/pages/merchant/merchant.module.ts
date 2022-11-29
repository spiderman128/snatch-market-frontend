import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantRoutingModule } from './merchant-routing.module';
import { MerchantComponent } from './merchant.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MerchantComponent],
  exports : [MerchantComponent],
  imports: [
    CommonModule,
    SharedModule,
    MerchantRoutingModule
  ]
})
export class MerchantModule { }
