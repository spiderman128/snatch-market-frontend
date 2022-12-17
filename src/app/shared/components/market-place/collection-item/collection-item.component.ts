import { Component, OnInit, Input, Output } from '@angular/core';
import { RewardCollection } from '@interfaces/collection.model';

@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss']
})
export class CollectionItemComponent implements OnInit {

  @Input() collection!: RewardCollection;
  constructor() { }

  ngOnInit(): void {
  }

}
