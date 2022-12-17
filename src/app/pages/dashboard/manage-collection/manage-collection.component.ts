import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { setSidebarNavsData } from '../store/dashboard.action';
import { SidebarItem } from '@interfaces/sidebar-item';

@Component({
  selector: 'app-manage-collection',
  templateUrl: './manage-collection.component.html',
  styleUrls: ['./manage-collection.component.scss']
})
export class ManageCollectionComponent implements OnInit {

  sidebarItems: SidebarItem[] = [];

  itemsCount = 1000;
  itemsPage = 1;
  itemsPerPage = 4;

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
        title: 'Manage Users',
        activeImage: 'assets/img/project/dashboard/user_active.png',
        image: 'assets/img/project/dashboard/user.png',
        isActive: false,
        isDot: true,
        itemUrl: '/dashboard/manage-user'
      },
      {
        title: 'Manage Collection',
        activeImage: 'assets/img/project/dashboard/collection_active.png',
        image: 'assets/img/project/dashboard/collection.png',
        isActive: true,
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
