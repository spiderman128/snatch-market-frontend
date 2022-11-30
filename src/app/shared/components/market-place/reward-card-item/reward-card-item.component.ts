import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reward-card-item',
  templateUrl: './reward-card-item.component.html',
  styleUrls: ['./reward-card-item.component.scss']
})
export class RewardCardItemComponent implements OnInit {

  @Output() onItemClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.onItemClick.emit("reward card item is clicked");
  }
}
