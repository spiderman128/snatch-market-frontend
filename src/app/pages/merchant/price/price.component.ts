import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { setStepIndexAction } from '../store/merchant.action';
import { selectStepIndex } from '../store/merchant.selector';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  @Input() data: any;
  @Output() onNextTab: EventEmitter<any> = new EventEmitter<any>();
  selectedStepIndex$ = this.store.pipe(select(selectStepIndex));
  selectedStepIndex = 0;
  
  isHelp: boolean = false;
  constructor(private store : Store) { }

  ngOnInit(): void {
    this.selectedStepIndex$.subscribe(data => this.selectedStepIndex = data);
  }

  onNext() {
    this.store.dispatch(setStepIndexAction({stepIndex: this.selectedStepIndex + 1}));
    this.onNextTab.emit('');
  }
  onSetPriceByHelp() {
    this.isHelp = true;
  }
}
