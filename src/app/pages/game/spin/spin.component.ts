import { AfterViewInit, Component, OnInit } from '@angular/core';
import { debug } from 'console';
// @ts-ignore
import {TimelineMax, TweenMax} from 'gsap';

declare let Winwheel: any;

@Component({
  selector: 'app-spin',
  templateUrl: './spin.component.html',
  styleUrls: ['./spin.component.scss']
})
export class SpinComponent implements AfterViewInit {
  

  theWheel: any;
  wheelPower = 0;
  wheelSpinning = false;
  winningSegment: string = "";
  spin_length = Math.floor(Math.min(window.innerWidth, 840) * 0.35);

  constructor() {
  }
  ngAfterViewInit(): void {
    this.theWheel = new Winwheel({
      numSegments: 8,
      outerRadius: this.spin_length,
      centerX: this.spin_length,
      centerY: this.spin_length,
      textFontSize: Math.floor(this.spin_length / 10),
      segments:
        [
          {fillStyle: '#eae56f', text: 'Prize 1'},
          {fillStyle: '#89f26e', text: 'Prize 2'},
          {fillStyle: '#7de6ef', text: 'Prize 3'},
          {fillStyle: '#e7706f', text: 'Prize 4'},
          {fillStyle: '#eae56f', text: 'Prize 5'},
          {fillStyle: '#89f26e', text: 'Prize 6'},
          {fillStyle: '#7de6ef', text: 'Prize 7'},
          {fillStyle: '#e7706f', text: 'Prize 8'},
        ],
      animation:
        {
          type: 'spinToStop',
          duration: 5,
          spins: 8,
          callbackFinished: this.alertPrize.bind(this)
        },
      pointerGuide:
        {
          display: true,
          strokeStyle: 'red',
          lineWidth: 3
        }
    });
  }

  startSpin(): void {
    if (this.wheelSpinning === false) {
      this.wheelPower = 3;
      this.theWheel.animation.spins = 15;
    }
    this.theWheel.startAnimation(new TweenMax(new TimelineMax()));
    this.wheelSpinning = true;
  }

  resetWheel(): void {
    this.theWheel.stopAnimation(false);
    this.theWheel.rotationAngle = 0;
    this.theWheel.draw();
    this.wheelSpinning = false;
  }

  alertPrize(): void {
    this.winningSegment = this.theWheel.getIndicatedSegment().text;
    console.log(this.theWheel.animation.stopAngle);
    alert('You have won ' + this.theWheel.getIndicatedSegment().text);
    this.resetWheel();
  }

  getSegment(e: any): void {
    const clickedSegment = this.theWheel.getSegmentAt(e.clientX, e.clientY);
    console.log('Segment clicked - ', clickedSegment);
  }

  calculatePrize(): void {
    // This formula always makes the wheel stop somewhere inside prize 3 at least
    // 1 degree away from the start and end edges of the segment.
    const stopAt = (91 + Math.floor((Math.random() * 43)));
    // const stopAt = (25 + Math.floor((Math.random() * 78)));
    console.log('Stop at angle must lie between 90 and 135 degrees - ', stopAt);
    // Important thing is to set the stopAngle of the animation before stating the spin.
    this.theWheel.animation.stopAngle = stopAt;
    // May as well start the spin from here.
    this.startSpin();
    // this.theWheel.animation.callbackFinished = console.log('This after animation ends - ', this.theWheel.getIndicatedSegment());
  }
}
