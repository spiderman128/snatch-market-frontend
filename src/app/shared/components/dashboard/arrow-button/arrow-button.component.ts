import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-arrow-button',
  templateUrl: './arrow-button.component.html',
  styleUrls: ['./arrow-button.component.scss']
})
export class ArrowButtonComponent implements OnInit {

  @Input() isLeft: boolean = true;
  @Input() isRight: boolean = false;

  @Output() onHandle: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.onHandle.emit();
  }
}
