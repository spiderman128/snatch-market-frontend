import { Component, EventEmitter, HostListener, Input, OnInit, Output, AfterViewInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { setStepIndexAction } from '../store/merchant.action';
import { selectStepIndex } from '../store/merchant.selector';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.scss']
})
export class DynamicsComponent implements OnInit, AfterViewInit {

  @Input() data: any;
  @Output() onNextTab: EventEmitter<any> = new EventEmitter<any>();
  selectedStepIndex$ = this.store.pipe(select(selectStepIndex));
  selectedStepIndex = 0;

  progressbarValue: number = 50;
  progressvarIndicatorValue: number = 5000;
  progressbarMax = 10000;
  progressbarMin = 0;

  isMovable = false;
  constructor(private store: Store) { }
  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
    this.selectedStepIndex$.subscribe(data => this.selectedStepIndex = data);
  }

  onNext() {
    this.store.dispatch(setStepIndexAction({ stepIndex: this.selectedStepIndex + 1 }));
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
