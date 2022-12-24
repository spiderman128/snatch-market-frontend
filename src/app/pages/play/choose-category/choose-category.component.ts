import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-choose-category',
  templateUrl: './choose-category.component.html',
  styleUrls: ['./choose-category.component.scss']
})
export class ChooseCategoryComponent implements OnInit {

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
      image: 'assets/img/project/play/cate_1.png',
      imagePos: 'left',
      title: "Food",
      titlePos: 'bottom-right'
    },
    {
      image: 'assets/img/project/play/cate_2.png',
      imagePos: 'right',
      title: "Travel",
      titlePos: 'top-left'
    },
    {
      image: 'assets/img/project/play/cate_3.png',
      imagePos: 'top',
      title: "Gadgets",
      titlePos: 'bottom-left'
    },
    {
      image: 'assets/img/project/play/cate_4.png',
      imagePos: 'bottom',
      title: "Electronics",
      titlePos: 'top-left'
    },
    {
      image: 'assets/img/project/play/cate_5.png',
      imagePos: 'top',
      title: "Clothes",
      titlePos: 'bottom-left'
    },
    {
      image: 'assets/img/project/play/cate_6.png',
      imagePos: 'bottom',
      title: "Beauty",
      titlePos: 'top-left'
    },
    {
      image: 'assets/img/project/play/cate_7.png',
      imagePos: 'top',
      title: "Arcades",
      titlePos: 'bottom-left'
    }
  ]

  @ViewChild('slickModal') slickModal?: SlickCarouselComponent;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickNextCarousel(event: any) {
    this.slickModal!.slickNext();
  }
  onClickPrevCarousel(event: any) {
    this.slickModal!.slickPrev();
  }
  onClickNext(event: any) {
    this.router.navigate(['/play/chooseBrand']);
  }
}
