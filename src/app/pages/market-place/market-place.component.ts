import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { invokeCollectionsAPI } from './store/marketplace.action';
import { selectCollections } from './store/marketplace.selector';

@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.scss']
})
export class MarketPlaceComponent implements OnInit {

  constructor(private store: Store) { }

  collections$ = this.store.pipe(select(selectCollections));
  itemsCount = 1000;
  itemsPage = 1;
  itemsPerPage = 4;

  ngOnInit(): void {
    this.store.dispatch(invokeCollectionsAPI({ page: 1, limit: 5 }));
    console.log('component data', this.collections$)
    this.collections$.subscribe(data => {
      console.log('component data', data)
    })
  }

  onChangePage(page: number) {
    this.itemsPage = page;
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
}
