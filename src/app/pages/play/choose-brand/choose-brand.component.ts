import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-choose-brand',
  templateUrl: './choose-brand.component.html',
  styleUrls: ['./choose-brand.component.scss']
})
export class ChooseBrandComponent implements OnInit {

  public slideConfig = {
    slidesToShow: 1, 
    slidesToScroll: 1, 
    dots: false, 
    infinite: false, 
    adaptiveHeight: true, 
    variableWidth: true, 
    arrows: false, 
    centerMode: false
  };
  sliderItems = [
    {
      image: 'assets/img/project/play/brand_1.png'
    },
    {
      image: 'assets/img/project/play/brand_2.png'
    },
    {
      image: 'assets/img/project/play/brand_3.png'
    },
    {
      image: 'assets/img/project/play/brand_4.png'
    }
  ]

  @ViewChild('slickModal') slickModal?: SlickCarouselComponent;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickNext(event: any) {
    this.router.navigate(['/game/spin']);
  }
  onClickNextCarousel(event: any) {
    this.slickModal?.slickNext();
  }
}
