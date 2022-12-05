import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { setUserSignupStepIndex } from '../../../store/auth.action';
import { selectUserSingupStepIndex } from '../../../store/auth.select';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss']
})
export class FirstStepComponent implements OnInit {

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
