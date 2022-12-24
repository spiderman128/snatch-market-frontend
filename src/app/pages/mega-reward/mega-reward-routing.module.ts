import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MegaRewardComponent } from './mega-reward.component';

const routes: Routes = [
  {
    path: '',
    component: MegaRewardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MegaRewardRoutingModule { }
