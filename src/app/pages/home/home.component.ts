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
