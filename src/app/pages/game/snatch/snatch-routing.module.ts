import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnatchComponent } from './snatch.component';

const routes: Routes = [
  {
    path : "",
    component : SnatchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnatchRoutingModule { }
