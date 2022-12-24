import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinRoutingModule } from './spin-routing.module';
import { SpinComponent } from './spin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [SpinComponent],
  exports : [SpinComponent],
  imports: [
    CommonModule,
    SpinRoutingModule,
    SharedModule,
    SlickCarouselModule
  ]
})
export class SpinModule { }
