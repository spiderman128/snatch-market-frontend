import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './brand/brand.component';
import { CollectionsComponent } from './collections/collections.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { MarketPlaceComponent } from './market-place.component';
import { NewComponent } from './new/new.component';
import { RewardsbytypeComponent } from './rewardsbytype/rewardsbytype.component';

const routes: Routes = [
  {
    path: '',
    component: MarketPlaceComponent,
    children: [
      { path: '', redirectTo: 'new', pathMatch: 'full' },
      {
        path: 'new',
        component: NewComponent
      },
      {
        path: 'collections',
        component: CollectionsComponent
      },
      {
        path: 'rewardsByType',
        component: RewardsbytypeComponent
      },
      {
        path: 'brand',
        component: BrandComponent
      },
      {
        path: 'itemDetail/:id',
        component: ItemDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketPlaceRoutingModule { }
