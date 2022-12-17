import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DHomeComponent } from './home/home.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { dashboardReducer } from './store/dashboard.reducer';
import { NgApexchartsModule } from "ng-apexcharts";
import { ReactiveFormsModule } from '@angular/forms';
import { ManageMerchantComponent } from './manage-merchant/manage-merchant.component';
import { MerchantApproveComponent } from './manage-merchant/merchant-approve/merchant-approve.component';
import { MerchantViewComponent } from './manage-merchant/merchant-view/merchant-view.component';
import { MerchantPortalComponent } from './merchant-portal/merchant-portal.component';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { ManageUserComponent } from './manage-user/manage-user.component';

import { NgScrollbarModule, NG_SCROLLBAR_OPTIONS } from 'ngx-scrollbar';
import { ManageCollectionComponent } from './manage-collection/manage-collection.component';
import { ManageRewardComponent } from './manage-reward/manage-reward.component';
import { ManageListRewardComponent } from './manage-list-reward/manage-list-reward.component';
import { ManageRedeemRewardComponent } from './manage-redeem-reward/manage-redeem-reward.component';
import { ManageRedeemNowComponent } from './manage-redeem-now/manage-redeem-now.component';
@NgModule({
  declarations: [
    DashboardComponent,
    DHomeComponent,
    ManageMerchantComponent,
    MerchantApproveComponent,
    MerchantViewComponent,
    MerchantPortalComponent,
    UserPortalComponent,
    ManageUserComponent,
    ManageCollectionComponent,
    ManageRewardComponent,
    ManageListRewardComponent,
    ManageRedeemRewardComponent,
    ManageRedeemNowComponent
  ],
  exports : [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    StoreModule.forFeature('dashboardstate', dashboardReducer),
    NgScrollbarModule,
    // EffectsModule.forFeature([])
  ]
})
export class DashboardModule { }
