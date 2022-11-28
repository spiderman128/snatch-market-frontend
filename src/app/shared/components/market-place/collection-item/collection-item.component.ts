import { Component, OnInit, Input, Output } from '@angular/core';
import { CollectionModel } from '@interfaces/collection.model';

@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss']
})
export class CollectionItemComponent implements OnInit {

  @Input() collection!: CollectionModel;
  constructor() { }

  ngOnInit(): void {
  }

}
