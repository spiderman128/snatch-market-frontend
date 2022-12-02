import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {select, Store} from '@ngrx/store';
import { setArtistStepIndexAction } from '../../store/merchant.action';
import { selectArtistStepIndex } from '../../store/merchant.selector';

@Component({
  selector: 'app-vetted-artists',
  templateUrl: './vetted-artists.component.html',
  styleUrls: ['./vetted-artists.component.scss']
})
export class VettedArtistsComponent implements OnInit {

  @Input() data: any;
  @Output() onNextItem: EventEmitter<any> = new EventEmitter<any>();

  selectedArtworkStepIndex$ = this.store.pipe(select(selectArtistStepIndex));
  selectedArtworkStepIndex = 0;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.selectedArtworkStepIndex$.subscribe(data => this.selectedArtworkStepIndex = data);
  }

  onNext() {
    this.store.dispatch(setArtistStepIndexAction({stepIndex: 3}));
    this.onNextItem.emit('');
  }

  onBack() {
    this.store.dispatch(setArtistStepIndexAction({stepIndex: 0}));
    this.onNextItem.emit('');
  }
}
