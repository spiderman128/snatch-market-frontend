import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NewRewardDropped } from '@interfaces/newrewardcollection';

@Component({
  selector: 'reward-drop-card',
  templateUrl: './reward-drop-card.component.html',
  styleUrls: ['./reward-drop-card.component.scss']
})
export class RewardDropCardComponent implements OnInit {

  @Input() data: NewRewardDropped = {
    id: 0,
    title: '',
    drawFee: 0,
    imageUrl: '',
    rewardLeft: 0
  };
  @Output() onItemClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.onItemClick.emit("reward card item is clicked");
  }

}
