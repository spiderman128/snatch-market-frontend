import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { setSidebarNavsData } from '../../store/dashboard.action';
import { SidebarItem } from '@interfaces/sidebar-item';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merchant-view',
  templateUrl: './merchant-view.component.html',
  styleUrls: ['./merchant-view.component.scss']
})
export class MerchantViewComponent implements OnInit {

  sidebarItems: SidebarItem[] = [];

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.sidebarItems = this.onGetSidebarItems();
    this.store.dispatch(setSidebarNavsData({ data: this.sidebarItems }));
  }

  onGetSidebarItems(): SidebarItem[] {
    return [
      {
        title: 'Dashboard',
        activeImage: 'assets/img/project/dashboard/dashboard_active.png',
        image: 'assets/img/project/dashboard/dashboard.png',
        isActive: false,
        isDot: true,
        itemUrl: '/dashboard/index'
      },
      {
        title: 'Manage Users',
        activeImage: 'assets/img/project/dashboard/user_active.png',
        image: 'assets/img/project/dashboard/user.png',
        isActive: true,
        isDot: true,
        itemUrl: '/dashboard/manage-merchant'
      },
      {
        title: 'Setting',
        activeImage: 'assets/img/project/dashboard/setting_active.png',
        image: 'assets/img/project/dashboard/setting.png',
        isActive: false,
        isDot: false,
        itemUrl: '/dashboard/index'
      }
    ]
  }
}
