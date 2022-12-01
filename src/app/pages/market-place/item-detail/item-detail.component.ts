import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { isShowSearchAction } from '../store/marketplace.action';
import { selectIsShowSearchAction } from '../store/marketplace.selector';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private activeRoute: ActivatedRoute, private store: Store) { }
  

  
  itemId: number = 0;
  ngOnInit(): void {
    this.store.dispatch(isShowSearchAction({'isShowSearchAction' : false}));

    this.itemId = parseInt(this.activeRoute.snapshot.paramMap.get('id') || "");
    console.log(this.itemId);
  }
  ngOnDestroy(): void {
    this.store.dispatch(isShowSearchAction({'isShowSearchAction' : true}));
  }

}
