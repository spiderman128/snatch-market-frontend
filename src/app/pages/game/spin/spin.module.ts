import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinRoutingModule } from './spin-routing.module';
import { SpinComponent } from './spin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragScrollModule } from 'ngx-drag-scroll';


@NgModule({
  declarations: [SpinComponent],
  exports : [SpinComponent],
  imports: [
    CommonModule,
    SpinRoutingModule,
    SharedModule,
    DragScrollModule
  ]
})
export class SpinModule { }
