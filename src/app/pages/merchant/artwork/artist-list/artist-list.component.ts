import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {select, Store} from '@ngrx/store';
import { setArtistStepIndexAction } from '../../store/merchant.action';
import { selectArtistStepIndex } from '../../store/merchant.selector';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {

  @Input() data: any;
  @Output() onNextItem: EventEmitter<any> = new EventEmitter<any>();

  selectedArtworkStepIndex$ = this.store.pipe(select(selectArtistStepIndex));
  selectedArtworkStepIndex = 0;

  isDetail: boolean = false;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.selectedArtworkStepIndex$.subscribe(data => this.selectedArtworkStepIndex = data);
  }

  onNext() {
    this.store.dispatch(setArtistStepIndexAction({stepIndex: this.selectedArtworkStepIndex + 1}));
    this.onNextItem.emit('');
  }
  onBack() {
    this.store.dispatch(setArtistStepIndexAction({stepIndex: 0}));
    this.onNextItem.emit('');
  }
  onClose() {
    this.isDetail = false;
    const artistCardsEl = document.querySelectorAll('.artist-card');
    artistCardsEl.forEach(element => {
      element.classList.remove('opacity-5');
    });
  }
  onHandleDetail(event: any) {
    this.isDetail = true;
    const activeCardEl = event.target.closest('.artist-card')
    const artistCardsEl = document.querySelectorAll('.artist-card');
    artistCardsEl.forEach(element => {
      element.classList.add('opacity-5');
    });
    activeCardEl.classList.remove('opacity-5');
  }

  onConfirm() {
    this.store.dispatch(setArtistStepIndexAction({stepIndex: this.selectedArtworkStepIndex + 1}));
    this.onNextItem.emit('');
  }
}
