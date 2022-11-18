import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'process-card',
  templateUrl: './process-card.component.html',
  styleUrls: ['./process-card.component.scss']
})
export class ProcessCardComponent implements OnInit {

  @Input() type: string = 'lock';
  @Input() noImage: boolean = false;
  @Input() index: number = 1;
  @Input() buttonText: string = 'sign up';
  imgUrl: string = '';
  constructor() { }

  ngOnInit(): void {
    this.imgUrl = this.getImageUrl();
  }
  getImageUrl() {
    let _imageUrl = 'assets/img/project/lock.png';
    switch (this.type) {
      case "lock":
        _imageUrl = 'assets/img/project/lock.png';
        break;
      case "finger":
        _imageUrl = 'assets/img/project/finger.png';
        break;
      default:
        break;
    }
    return _imageUrl;
  }

}
