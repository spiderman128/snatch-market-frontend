import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, OnChanges, Output, ViewChild, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppButtonComponent implements AfterViewInit, OnChanges{

  @Input() text: string = "Text";
  @Input() isTextStroke : boolean = true;
  @Input() isBackgroundTransparent: boolean = false;
  @Input() isTextDark: boolean = false;
  @Input() size : string = 'md';
  @Output() onClickEvent: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild("appButton") appButton!: ElementRef<HTMLDivElement>;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    // if(!changes['text'].firstChange) {
      
    // }
  }
  ngAfterViewInit(): void {
    if (this.size == "sm") {
      console.log("============")
      this.appButton.nativeElement.style.setProperty('--padding-size', '2px');
    }
  }

  onClick(data : any) {
    data.preventDefault();
    data.stopPropagation();
    this.onClickEvent.emit(data);
  }
}
