import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';
import { ChooseCategoryComponent } from './choose-category/choose-category.component';
import { ChooseBrandComponent } from './choose-brand/choose-brand.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@NgModule({
  declarations: [
    ChooseCategoryComponent,
    ChooseBrandComponent
  ],
  exports: [
    ChooseCategoryComponent,
    ChooseBrandComponent
  ],
  imports: [
    CommonModule,
    PlayRoutingModule,
    SharedModule,
    SlickCarouselModule
  ]
})
export class PlayModule { }
