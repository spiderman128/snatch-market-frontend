import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DHomeComponent } from './home/home.component';
import { ManageCollectionComponent } from './manage-collection/manage-collection.component';
import { ManageListRewardComponent } from './manage-list-reward/manage-list-reward.component';
import { ManageMerchantComponent } from './manage-merchant/manage-merchant.component';
import { MerchantApproveComponent } from './manage-merchant/merchant-approve/merchant-approve.component';
import { MerchantViewComponent } from './manage-merchant/merchant-view/merchant-view.component';
import { ManageRedeemNowComponent } from './manage-redeem-now/manage-redeem-now.component';
import { ManageRedeemRewardComponent } from './manage-redeem-reward/manage-redeem-reward.component';
import { ManageRewardComponent } from './manage-reward/manage-reward.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { MerchantPortalComponent } from './merchant-portal/merchant-portal.component';
import { UserPortalComponent } from './user-portal/user-portal.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'index',
        pathMatch : 'full'
      },
      {
        path : 'index',
        component : DHomeComponent
      },
      {
        path : 'merchant-portal',
        component : MerchantPortalComponent
      },
      {
        path : 'user-portal',
        component : UserPortalComponent
      },
      {
        path : 'manage-merchant',
        component : ManageMerchantComponent
      },
      {
        path : 'manage-merchant/approve',
        component : MerchantApproveComponent
      },
      {
        path : 'manage-merchant/view',
        component : MerchantViewComponent
      },
      {
        path : 'manage-user',
        component : ManageUserComponent
      },
      {
        path : 'manage-collection',
        component : ManageCollectionComponent
      },
      {
        path : 'manage-reward',
        component : ManageRewardComponent
      },
      {
        path : 'manage-unlisted-reward',
        component : ManageListRewardComponent
      },
      {
        path : 'manage-redeem-reward',
        component : ManageRedeemRewardComponent
      },
      {
        path : 'manage-redeem-now',
        component : ManageRedeemNowComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
