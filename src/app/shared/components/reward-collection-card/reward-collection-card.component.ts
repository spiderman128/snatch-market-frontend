import { Component, Input, OnInit } from '@angular/core';
import { NewRewardCollection } from '@interfaces/newrewardcollection';

@Component({
  selector: 'reward-collection-card',
  templateUrl: './reward-collection-card.component.html',
  styleUrls: ['./reward-collection-card.component.scss']
})
export class RewardCollectionCardComponent implements OnInit {

  @Input() data: NewRewardCollection = {};
  constructor() { }

  ngOnInit(): void {
    // console.log("personal data is here", this.data);
  }

}
