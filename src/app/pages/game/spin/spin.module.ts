import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxWheelModule } from 'ngx-wheel';

import { SpinRoutingModule } from './spin-routing.module';
import { SpinComponent } from './spin.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [SpinComponent],
  exports : [SpinComponent],
  imports: [
    CommonModule,
    SpinRoutingModule,
    SharedModule,
    NgxWheelModule
  ]
})
export class SpinModule { }
