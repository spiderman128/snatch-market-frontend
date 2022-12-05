import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { setMerchantSignupStepIndex } from '../../store/auth.action';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.scss']
})
export class MThirdStepComponent implements OnInit {

  @Input() data: any;
  @Output() onNext:EventEmitter<any> = new EventEmitter<any>();

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  onClickNext() {
    this.store.dispatch(setMerchantSignupStepIndex({stepIndex: this.data.stepIndex + 1}))
    this.onNext.emit('');
  }

}
