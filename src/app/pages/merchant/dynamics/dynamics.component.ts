import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {select, Store} from '@ngrx/store';
import { setStepIndexAction } from '../store/merchant.action';
import { selectStepIndex } from '../store/merchant.selector';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.scss']
})
export class DynamicsComponent implements OnInit {

  @Input() data: any;
  @Output() onNextTab: EventEmitter<any> = new EventEmitter<any>();
  selectedStepIndex$ = this.store.pipe(select(selectStepIndex));
  selectedStepIndex = 0;
  constructor(private store : Store) { }

  ngOnInit(): void {
    this.selectedStepIndex$.subscribe(data => this.selectedStepIndex = data);
  }

  onNext() {
    this.store.dispatch(setStepIndexAction({stepIndex: this.selectedStepIndex + 1}));
    this.onNextTab.emit('');
  }
}
