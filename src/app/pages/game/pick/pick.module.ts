import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PickRoutingModule } from './pick-routing.module';
import { PickComponent } from './pick.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragScrollModule } from 'ngx-drag-scroll';


@NgModule({
  declarations: [PickComponent],
  exports : [PickComponent],
  imports: [
    CommonModule,
    PickRoutingModule,
    SharedModule,
    DragScrollModule
  ]
})
export class PickModule { }
