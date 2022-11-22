import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'image-button',
  templateUrl: './image-button.component.html',
  styleUrls: ['./image-button.component.scss']
})
export class ImageButtonComponent implements OnInit {

  @ViewChild("imageButtonElement", { static: true }) private imageButtonElement!: ElementRef<HTMLDivElement>;

  @Input() text: string = "Play Now";
  @Input() size: string = 'md';
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    if (this.size == "sm") {
      this.imageButtonElement.nativeElement.style.setProperty('--height', '2.7rem');
      this.imageButtonElement.nativeElement.style.setProperty('--width', '2rem');
      this.imageButtonElement.nativeElement.style.setProperty('--font-size', '15px');
    }
    if (this.size == "lg") {
      this.imageButtonElement.nativeElement.style.setProperty('--height', '3.8rem');
      this.imageButtonElement.nativeElement.style.setProperty('--width', '3.5rem');
      this.imageButtonElement.nativeElement.style.setProperty('--font-size', '30px');
    }
  }

  onHandleClick() {
    this.onClick.emit("button is clicked");
  }
}
