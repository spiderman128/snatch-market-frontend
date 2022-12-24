import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnatchRoutingModule } from './snatch-routing.module';
import { SnatchComponent } from './snatch.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [SnatchComponent],
  exports : [SnatchComponent],
  imports: [
    CommonModule,
    SnatchRoutingModule,
    SharedModule,
    SlickCarouselModule
  ]
})
export class SnatchModule { }
