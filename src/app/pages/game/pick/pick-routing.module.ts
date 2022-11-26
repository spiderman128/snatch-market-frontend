import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PickComponent } from './pick.component';

const routes: Routes = [
  {
    path : "",
    component : PickComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PickRoutingModule { }
