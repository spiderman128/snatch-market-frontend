import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { setSidebarNavsData } from '../../store/dashboard.action';
import { SidebarItem } from '@interfaces/sidebar-item';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merchant-approve',
  templateUrl: './merchant-approve.component.html',
  styleUrls: ['./merchant-approve.component.scss']
})
export class MerchantApproveComponent implements OnInit {

  sidebarItems: SidebarItem[] = [];

  itemsCount = 1000;
  itemsPage = 1;
  itemsPerPage = 4;

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.sidebarItems = this.onGetSidebarItems();
    this.store.dispatch(setSidebarNavsData({ data: this.sidebarItems }));
  }

  onChangePage(_page: number) {
    this.itemsPage = _page;

    // this.itemsCount = 45;
    if (this.itemsPerPage < 1) {
      this.itemsPerPage = 4;
    }
    const page = this.itemsPage;
    const totalPages = Math.ceil(this.itemsCount / this.itemsPerPage);
    if (page >= totalPages) {
      this.itemsPage = totalPages;
    }

    // this.itemsCount = item.count;
    //       if (this.itemsPerPage < 1) {
    //         this.itemsPerPage = this.itemsPerPageDefault;
    //       }
    //       const page = this.itemsPage;
    //       const totalPages = Math.ceil(this.itemsCount / this.itemsPerPage);
    //       if (page >= totalPages) {
    //         this.itemsPage = totalPages;
    //       }
    //       this.itemsService.getItems(
    //         this.api, this.url, this.itemsPerPage, this.itemsPage, this.query)
    //         .subscribe(items => {
    //           this.items = items;
    //           this.loaded = true;
    //         });
  }
  
  onClickBack() {
    this.router.navigate(['/dashboard/manage-merchant']);
  }
  onClickView() {
    this.router.navigate(['/dashboard/manage-merchant/view']);
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
