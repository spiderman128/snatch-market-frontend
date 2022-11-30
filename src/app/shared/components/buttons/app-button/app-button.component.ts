import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss']
})
export class AppButtonComponent implements OnInit, AfterViewInit {

  @Input() text: string = "Text";
  @Input() isTextStroke : boolean = true;
  @Input() isBackgroundTransparent: boolean = false;
  @Input() size : string = 'md';
  @Output() onClickEvent: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild("appButton") appButton!: ElementRef<HTMLDivElement>;
  constructor() { }
  ngAfterViewInit(): void {
    if (this.size == "sm") {
      console.log("============")
      this.appButton.nativeElement.style.setProperty('--padding-size', '2px');
    }
  }

  ngOnInit(): void {
    
  }

  onClick(data : any) {
    this.onClickEvent.emit("button is clicked");
  }
}
