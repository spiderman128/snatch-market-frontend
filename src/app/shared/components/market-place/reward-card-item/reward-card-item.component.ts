import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RewardCollection } from '@interfaces/collection.model';

@Component({
  selector: 'app-reward-card-item',
  templateUrl: './reward-card-item.component.html',
  styleUrls: ['./reward-card-item.component.scss']
})
export class RewardCardItemComponent implements OnInit {

  @Input() data: any = {}
  @Output() onItemClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.onItemClick.emit("reward card item is clicked");
  }
}
