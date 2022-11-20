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
import { NgxCarousel3dModule }  from 'ngx-carousel-3d';

@NgModule({
  imports :
  [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    DragScrollModule,
    NgxCarousel3dModule,
  ],
  declarations :
  [
    HomeComponent,
  ],
})
export class HomeModule { }
