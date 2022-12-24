import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PickRoutingModule } from './pick-routing.module';
import { PickComponent } from './pick.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [PickComponent],
  exports : [PickComponent],
  imports: [
    CommonModule,
    PickRoutingModule,
    SharedModule,
    SlickCarouselModule
  ]
})
export class PickModule { }
