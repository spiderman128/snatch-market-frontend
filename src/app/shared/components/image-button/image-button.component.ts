import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'image-button',
  templateUrl: './image-button.component.html',
  styleUrls: ['./image-button.component.scss']
})
export class ImageButtonComponent implements OnInit {

  @ViewChild("imageButtonElement", { static: true }) private imageButtonElement!: ElementRef<HTMLDivElement>;

  @Input() text: string = "Play Now";
  @Input() size: string = 'normal';
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    if (this.size == "sm") {
      this.imageButtonElement.nativeElement.style.setProperty('--height', '2.5rem');
    }
  }

  onHandleClick() {
    this.onClick.emit("button is clicked");
  }
}
