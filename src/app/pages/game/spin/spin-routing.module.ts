import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpinComponent } from './spin.component';

const routes: Routes = [
  {
    path : '',
    component : SpinComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpinRoutingModule { }
