// Angular modules
import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';

import { DragScrollComponent } from "ngx-drag-scroll";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('carousel') carousel: any;
  slides: Array<Object> = [
    {
      src: 'assets/img/project/top-panel-carousel/1.png'
    },
    {
      src: 'assets/img/project/top-panel-carousel/2.png'
    },
    {
      src: 'assets/img/project/top-panel-carousel/3.png'
    },
    {
      src: 'assets/img/project/top-panel-carousel/4.png'
    },
  ];
  options: Object = {
    clicking: true,
    sourceProp: 'src',
    visible: 7,
    perspective: 1,
    startSlide: 0,
    border: 3,
    dir: 'ltr',
    width: 360,
    height: 270,
    space: 220,
    autoRotationSpeed: 5000,
    loop: true
  }
  public isLoading: boolean = true;

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
  constructor
    (
  ) { }

  // -------------------------------------------------------------------------------
  // ---- NOTE Init ----------------------------------------------------------------
  // -------------------------------------------------------------------------------

  public ngOnInit(): void {
    setTimeout(_ => {
      this.isLoading = false;
    }, 500);
  }

  // -------------------------------------------------------------------------------
  // ---- NOTE Actions -------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // ---- NOTE Computed props ------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // ---- NOTE Helpers -------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // ---- NOTE Requests ------------------------------------------------------------
  // -------------------------------------------------------------------------------

  // -------------------------------------------------------------------------------
  // ---- NOTE Subscriptions -------------------------------------------------------
  // -------------------------------------------------------------------------------

}
