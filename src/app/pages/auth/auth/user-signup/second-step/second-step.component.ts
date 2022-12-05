import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { setUserSignupStepIndex } from '../../../store/auth.action';
import { selectUserSingupStepIndex } from '../../../store/auth.select';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss']
})
export class SecondStepComponent implements OnInit {

  @Input() data: any;
  @Output() onNext: EventEmitter<any> = new EventEmitter<any>()

  selectedStepIndex: number = 0;
  selectedStepIndex$ = this.store.pipe(select(selectUserSingupStepIndex));
  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.selectedStepIndex$.subscribe(data => this.selectedStepIndex = data);
  }

  onClickNext(event: any) {
    this.store.dispatch(setUserSignupStepIndex({stepIndex: this.selectedStepIndex + 1}));
    this.onNext.emit();
  }
}
