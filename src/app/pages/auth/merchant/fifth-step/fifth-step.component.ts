import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { setMerchantSignupStepIndex } from '../../store/auth.action';

@Component({
  selector: 'app-fifth-step',
  templateUrl: './fifth-step.component.html',
  styleUrls: ['./fifth-step.component.scss']
})
export class MFifthStepComponent implements OnInit {

  @Input() data: any;
  @Output() onNext:EventEmitter<any> = new EventEmitter<any>();

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  onClickNext() {
    this.store.dispatch(setMerchantSignupStepIndex({stepIndex: 0}))
    this.onNext.emit({isFinal: true});
  }
}
