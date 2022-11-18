import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'reward-drop-card',
  templateUrl: './reward-drop-card.component.html',
  styleUrls: ['./reward-drop-card.component.scss']
})
export class RewardDropCardComponent implements OnInit {

  @Input() data: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
