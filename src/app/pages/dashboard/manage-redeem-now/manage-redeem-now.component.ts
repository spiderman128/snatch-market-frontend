import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { setSidebarNavsData } from '../store/dashboard.action';
import { SidebarItem } from '@interfaces/sidebar-item';

@Component({
  selector: 'app-manage-redeem-now',
  templateUrl: './manage-redeem-now.component.html',
  styleUrls: ['./manage-redeem-now.component.scss']
})
export class ManageRedeemNowComponent implements OnInit {
  sidebarItems: SidebarItem[] = [];

  itemsCount = 50;
  itemsPage = 1;
  itemsPerPage = 10;


  constructor(private store: Store) { }

  ngOnInit(): void {
    this.sidebarItems = this.onGetSidebarItems();
    console.log(this.sidebarItems);
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
        title: 'List Rewards',
        activeImage: 'assets/img/project/dashboard/add.png',
        image: 'assets/img/project/dashboard/add.png',
        isActive: false,
        isDot: true,
        itemUrl: '/dashboard/manage-unlisted-reward'
      },
      {
        title: 'Manage Rewards',
        activeImage: 'assets/img/project/dashboard/manage_reward_active.png',
        image: 'assets/img/project/dashboard/manage_reward.png',
        isActive: false,
        isDot: true,
        itemUrl: '/dashboard/manage-reward'
      },
      {
        title: 'Redeem Rewards',
        activeImage: 'assets/img/project/dashboard/redeem_reward_active.png',
        image: 'assets/img/project/dashboard/redeem_reward.png',
        isActive: true,
        isDot: true,
        itemUrl: '/dashboard/manage-redeem-reward'
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
