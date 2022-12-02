// Angular modules
import { AfterViewInit, Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';


import { DragScrollComponent } from "ngx-drag-scroll";

import { NewRewardCollection } from '@interfaces/newrewardcollection';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  public isLoading: boolean = true;
  timer: any;

  @ViewChild('nav', { read: DragScrollComponent }) ds!: DragScrollComponent;

  rewardDropsData: any = [
    {
      title: "Free Caramel Macchiato for Life",
      tag: "Starbucks",
      fee: 50,
      image: 'assets/img/project/reward_drops/2.png'
    },
    {
      title: "Free Jordans Every Month",
      tag: "Nike",
      fee: 50,
      image: 'assets/img/project/reward_drops/3.png'
    },
    {
      title: "Free Icecream for Life",
      tag: "Starbucks",
      fee: 50,
      image: 'assets/img/project/reward_drops/1.png'
    }
  ];
  newRewardCollections: NewRewardCollection[] = [];


  constructor(private router: Router) { }
  ngOnDestroy(): void {
    clearInterval(this.timer);
  }


  ngAfterViewInit(): void {
    this.onInitTopCarousel();
  }

  // -------------------------------------------------------------------------------
  // ---- NOTE Init ----------------------------------------------------------------
  // -------------------------------------------------------------------------------

  public async ngOnInit(): Promise<void> {
    try {

      // const newRewards = await this.appService.getNewRewardCollection();

      // newRewards.data.forEach((element: NewRewardCollection) => {
      //   return this.newRewardCollections.push(element);
      // });
      // console.log(this.newRewardCollections);
      this.isLoading = false;

    } catch (error) {
      this.isLoading = false;
    }

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
