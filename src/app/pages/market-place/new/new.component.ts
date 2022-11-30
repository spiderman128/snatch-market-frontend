import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { invokeCollectionsAPI, isFilterShowAction } from '../store/marketplace.action';
import { selectCollections, selectIsFilterShow } from '../store/marketplace.selector';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  constructor(private store: Store, private router: Router) { }

  collections$ = this.store.pipe(select(selectCollections));
  isShowFilterPanel$ = this.store.pipe(select(selectIsFilterShow));
  itemsCount = 1000;
  itemsPage = 1;
  itemsPerPage = 4;

  // filter action flag
  isShowFilterPanel: boolean = false;

  ngOnInit(): void {
    this.store.dispatch(invokeCollectionsAPI({ page: 1, limit: 5 }));
    console.log('component data', this.collections$)
    this.collections$.subscribe(data => {
      console.log('component data', data)
    })
    this.isShowFilterPanel$.subscribe(data => {
      this.isShowFilterPanel = data;
    })
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


  onToggleFilter(event: any) {
    this.isShowFilterPanel = !this.isShowFilterPanel;
    this.store.dispatch(isFilterShowAction({isShowFilterShow : this.isShowFilterPanel}))
  }

  onHandleDetail(data: any) {
    this.router.navigate(['/market-place/itemDetail/1']);
  }
  onHandleCloseFilterPanel(data: any) {
    this.isShowFilterPanel = false;
    this.store.dispatch(isFilterShowAction({isShowFilterShow : this.isShowFilterPanel}))
  }
}
