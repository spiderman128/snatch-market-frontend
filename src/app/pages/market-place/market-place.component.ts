import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { isFilterShowAction } from './store/marketplace.action';
import { selectIsFilterShow, selectIsShowSearchAction } from './store/marketplace.selector';

@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.scss']
})
export class MarketPlaceComponent implements OnInit {

  isShowFilterPanel$ = this.store.pipe(select(selectIsFilterShow));
  // filter action flag
  isShowFilterPanel: boolean = false;

  isShowSearchAction: boolean = true;
  isShowSearchAction$ = this.store.pipe(select(selectIsShowSearchAction));
  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.isShowFilterPanel$.subscribe(data => {
      this.isShowFilterPanel = data;
    })
    this.isShowSearchAction$.subscribe(data => this.isShowSearchAction = data);
  }
  onToggleFilter(event: any) {
    this.isShowFilterPanel = !this.isShowFilterPanel;
    this.store.dispatch(isFilterShowAction({isShowFilterShow : this.isShowFilterPanel}))
  }
  onHandleCloseFilterPanel(data: any) {
    this.isShowFilterPanel = false;
    this.store.dispatch(isFilterShowAction({isShowFilterShow : this.isShowFilterPanel}))
  }
}
