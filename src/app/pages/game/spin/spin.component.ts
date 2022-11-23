import { AfterViewInit, Component  } from '@angular/core';
// @ts-ignore
import { TimelineMax, TweenMax } from 'gsap';


declare let Winwheel: any;

@Component({
  selector: 'app-spin',
  templateUrl: './spin.component.html',
  styleUrls: ['./spin.component.scss']
})
export class SpinComponent implements AfterViewInit {
  

  theWheel: any;
  wheelSpinning = false;
  winningSegment: string = "";

  constructor() {
  }
  ngAfterViewInit(): void {

    this.theWheel = new Winwheel({
      numSegments: 10,
      outerRadius: 620,
      centerX: 620,
      centerY: 620,
      textFontSize: 25,
      drawMode : 'segmentImage',
      segments:
        [
          {image: '/assets/img/project/game/spin/spin2.png', text: 'Prize 1'},
          {image: '/assets/img/project/game/spin/spin3.png', text: 'Prize 2'},
          {image: '/assets/img/project/game/spin/spin4.png', text: 'Prize 3'},
          {image: '/assets/img/project/game/spin/spin2.png', text: 'Prize 4'},
          {image: '/assets/img/project/game/spin/spin3.png', text: 'Prize 5'},
          {image: '/assets/img/project/game/spin/spin4.png', text: 'Prize 6'},
          {image: '/assets/img/project/game/spin/spin2.png', text: 'Prize 7'},
          {image: '/assets/img/project/game/spin/spin3.png', text: 'Prize 8'},
          {image: '/assets/img/project/game/spin/spin4.png', text: 'Prize 9'},
          {image: '/assets/img/project/game/spin/spin1.png', text: 'Prize 10'},
        ],
      animation:
        {
          type: 'spinToStop',
          duration: 5,
          spins: 10,
          callbackFinished: this.alertPrize.bind(this)
        }
    });
  }

  startSpin(): void {
    if (this.wheelSpinning == true) {
      return;
    }
    if (this.wheelSpinning === false) {
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

    var rect = document.getElementById('canvas')!.getBoundingClientRect();
    var el_result = document.querySelector(".spin-result img");
    var angle = this.theWheel.animation.stopAngle;
    
    el_result!.setAttribute("src", "/assets/img/project/game/spin/result.png");
    el_result!.setAttribute("style", "transform: rotate(" + (18 - angle % 36) + "deg);display: initial;")
    el_result!.setAttribute("height", "" + Math.floor((rect.right - rect.left)/2 * 0.94));
  }

  getSegment(e: any): void {
    const clickedSegment = this.theWheel.getSegmentAt(e.clientX, e.clientY);
    console.log('Segment clicked - ', clickedSegment);
  }

  calculatePrize(): void {
    const stopAt = Math.floor((Math.random() * 360));
    console.log('Stop at angle must lie at - ', stopAt);
    this.theWheel.animation.stopAngle = stopAt;
    this.startSpin();
  }
}
