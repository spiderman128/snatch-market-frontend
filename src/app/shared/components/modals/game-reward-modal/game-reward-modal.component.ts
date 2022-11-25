import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-game-reward-modal',
  templateUrl: './game-reward-modal.component.html',
  styleUrls: ['./game-reward-modal.component.scss']
})
export class GameRewardModalComponent implements OnInit {

  @Input() data: any = {};
  @Output() onButtonClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  onHandleButtonClick(data : any) {
    this.modal.close();
    this.onButtonClick.emit("modal button is clicked");
  }
}
