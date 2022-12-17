// Angular modules
import { AfterViewInit, Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';


import { DragScrollComponent } from "ngx-drag-scroll";

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

  @ViewChild('nav', { read: DragScrollComponent }) ds!: DragScrollComponent;

  newRewardCollection$ = this.store.pipe(select(selectNewRewardCollection));
  newRewardDropped$ = this.store.pipe(select(selectNewRewardDropped));

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

  ngOnInit(){
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
  onHandleGoSpin(data : any) {
    this.router.navigate(['/game/spin'], {replaceUrl : true});
  }

  onHandleGoSnatch(data : any) {
    this.router.navigate(['/game/snatch'], {replaceUrl : true});
  }

  onHanldeSignup(event: any) {
    this.router.navigate(['/auth/signup']);
  }
  onHandleGoPickcard(event: any) {
    this.router.navigate(['/game/pick'], {replaceUrl : true});
  }
}
