import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { setUserSignupStepIndex } from '../../../store/auth.action';
import { selectUserSingupStepIndex } from '../../../store/auth.select';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.scss']
})
export class ThirdStepComponent implements OnInit {

  @Input() data: any;
  @Output() onNext: EventEmitter<any> = new EventEmitter<any>()

  selectedStepIndex: number = 0;
  selectedStepIndex$ = this.store.pipe(select(selectUserSingupStepIndex));
  constructor(private store: Store, private router: Router) {
  }

  ngOnInit(): void {
    this.selectedStepIndex$.subscribe(data => this.selectedStepIndex = data);
  }

  onClickNext(event: any) {
    this.store.dispatch(setUserSignupStepIndex({stepIndex: 0}));
    // this.onNext.emit();
    this.router.navigate(['/auth/validate-account']);
  }

}
