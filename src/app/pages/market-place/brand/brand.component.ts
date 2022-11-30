import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectIsFilterShow } from '../store/marketplace.selector';
import { isFilterShowAction } from '../store/marketplace.action';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  isFilterShow$ =  this.store.pipe(select(selectIsFilterShow));

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.isFilterShow$.subscribe(data => {
      console.log(data);
    })
    this.store.dispatch(isFilterShowAction({isShowFilterShow : true}));
  }

}
