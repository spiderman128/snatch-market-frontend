import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { setSidebarNavsData } from '../store/dashboard.action';
import { SidebarItem } from '@interfaces/sidebar-item';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {

  sidebarItems: SidebarItem[] = [];
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.sidebarItems = this.onGetSidebarItems();
    console.log(this.sidebarItems);
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
        itemUrl: '/dashboard/manage-user'
      },
      {
        title: 'Manage Collection',
        activeImage: 'assets/img/project/dashboard/collection_active.png',
        image: 'assets/img/project/dashboard/collection.png',
        isActive: false,
        isDot: true,
        itemUrl: '/dashboard/manage-collection'
      },
      {
        title: 'Setting',
        activeImage: 'assets/img/project/dashboard/setting_active.png',
        image: 'assets/img/project/dashboard/setting.png',
        isActive: false,
        isDot: false,
        itemUrl: '/dashboard/index'
      }
    ];
  }

}
