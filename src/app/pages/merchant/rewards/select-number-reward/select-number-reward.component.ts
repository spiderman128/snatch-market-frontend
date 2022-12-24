import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { setRewardStepIndexAction } from '../../store/merchant.action';
import { selectRewardStepIndex } from '../../store/merchant.selector';

@Component({
  selector: 'app-select-number-reward',
  templateUrl: './select-number-reward.component.html',
  styleUrls: ['./select-number-reward.component.scss']
})
export class SelectNumberRewardComponent implements OnInit {

  @Input() data: any;
  @Output() onNextTab: EventEmitter<any> = new EventEmitter<any>();
  selectedRewardStepIndex$ = this.store.pipe(select(selectRewardStepIndex));
  selectedRewardStepIndex = 0;

  tabData: any = [
    {index : 1, title : "Step 1. Select Number of Rewards to Define"},
    {index : 2, title : "Step 2. Defining Reward"},
    {index : 3, title : "Step 3. Defining Info"}
  ];
  
  
  progressbarValue: number = 50;
  progressvarIndicatorValue: number = 250;
  progressbarMax = 500;
  progressbarMin = 10;

  isMovable = false;

  constructor(private store : Store) { }

  ngOnInit(): void {
    this.selectedRewardStepIndex$.subscribe(data => this.selectedRewardStepIndex = data);
  }

  onNext() {
    this.store.dispatch(setRewardStepIndexAction({stepIndex: this.selectedRewardStepIndex + 1}));
    this.onNextTab.emit('');
  }

  onHanldeTransitionTab(index : number) {
    this.store.dispatch(setRewardStepIndexAction({stepIndex : index}));
    this.selectedRewardStepIndex = index;
    this.onNextTab.emit('');
  }

  onMouseMoveIdicator(event: any) {
    console.log('when moving, isMovable value', this.isMovable)
    if (this.isMovable) {
      console.log("ProgressBar Indicator change", event);
      const el_progressbar = document.getElementById('progressbar');
      const start = el_progressbar?.getBoundingClientRect().left ?? 0;
      const end = el_progressbar?.getBoundingClientRect().right ?? 0;
      const current_pos = event.x;
      if(current_pos >= end) {
        this.progressbarValue = 99;
        this.progressvarIndicatorValue = this.progressbarMax;
      } else if(current_pos < start) {
        this.progressbarValue = 0;
      } else {
        this.progressbarValue = Math.floor((current_pos - start) * 100 / (end - start));
        this.progressvarIndicatorValue = Math.floor(this.progressbarMax * this.progressbarValue / 100);
      }
      if(this.progressbarValue <= 0) {
        this.progressvarIndicatorValue = 10;  
      }
    }

  }

  onMouseDownIndicator(event: any) {
    this.isMovable = true;
    console.log('mouse down', this.isMovable)
  }
  onMouseUpIndicator(event: any) {
    this.isMovable = false;
    console.log('mouse up here', this.isMovable)
  }
}
