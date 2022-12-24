import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseBrandComponent } from './choose-brand/choose-brand.component';
import { ChooseCategoryComponent } from './choose-category/choose-category.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'chooseCategory'
      },
      {
        path: 'chooseCategory',
        component: ChooseCategoryComponent
      },
      {
        path: 'chooseBrand',
        component: ChooseBrandComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayRoutingModule { }
