// Angular modules
import { AfterViewInit, Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';

import { NewRewardCollection } from '@interfaces/newrewardcollection';
import { Router } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { InvokeNewRewardCollection, InvokeNewRewardDropped } from './store/home.actions';
import { selectNewRewardCollection, selectNewRewardDropped } from './store/home.selectors';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  public isLoading: boolean = true;
  timer: any;

  newRewardCollection$ = this.store.pipe(select(selectNewRewardCollection));
  newRewardDropped$ = this.store.pipe(select(selectNewRewardDropped));

  slideConfig = { slidesToShow: 1, slidesToScroll: 1, dots: false, infinite: false, adaptiveHeight: true, variableWidth: true, arrows: false, centerMode: false };

  threeWaySlideConfig = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1067,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  newRewardCollectionSlideConfig = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1067,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  constructor(private router: Router, private store: Store) { }
  ngOnDestroy(): void {
    clearInterval(this.timer);
  }


  ngAfterViewInit(): void {

    this.onInitTopCarousel();
  }

  // -------------------------------------------------------------------------------
  // ---- NOTE Init ----------------------------------------------------------------
  // -------------------------------------------------------------------------------

  ngOnInit() {
    this.isLoading = false;
    this.store.dispatch(InvokeNewRewardCollection());
    this.store.dispatch(InvokeNewRewardDropped());
  }

  onInitTopCarousel() {
    // setInterval(() => {
    //   const sliderWrapperDom = document.getElementById('slider');
    //   let activeSliderDom = sliderWrapperDom?.querySelectorAll('input[type=`radio`]');
    //   console.log(activeSliderDom);
    // }, 1000)
    let activeSliderDoms = document.querySelectorAll('#slider input');


    this.timer = setInterval(() => {
      let nextSibling;
      let activeSliderDom = document.querySelector('#slider input[checked="true"]');
      let indexSliderDom = activeSliderDom?.getAttribute('data-index');
      // console.log(activeSliderDom!.nextElementSibling);
      if (activeSliderDoms.length == parseInt(indexSliderDom!.toString())) {
        nextSibling = activeSliderDom?.parentNode?.firstElementChild;
      } else {
        nextSibling = activeSliderDom!.nextElementSibling;
      }
      activeSliderDom?.removeAttribute('checked');
      nextSibling!.setAttribute('checked', 'true');
    }, 4000);
    // document.querySelector('#slider input[checked="true"]')
  }
  onHandleGoSpin(data: any) {
    this.router.navigate(['/game/spin'], { replaceUrl: true });
  }

  onHandleGoSnatch(data: any) {
    this.router.navigate(['/game/snatch'], { replaceUrl: true });
  }

  onHanldeSignup(event: any) {
    this.router.navigate(['/auth/signup']);
  }
  onHandleGoPickcard(event: any) {
    this.router.navigate(['/game/pick'], { replaceUrl: true });
  }

  addSlide() {
    // this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }
  removeSlide() {
    // this.slides.length = this.slides.length - 1;
  }
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }

  onClickPlayNow(event: any) {
    this.router.navigate(['/play/chooseCategory']);
  }
}
