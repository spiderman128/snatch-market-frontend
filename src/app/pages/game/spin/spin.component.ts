import { AfterViewInit, Component, ViewChild  } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GameRewardModalComponent } from '@modals/game-reward-modal/game-reward-modal.component';
import { DragScrollComponent } from 'ngx-drag-scroll';
// @ts-ignore
import { TimelineMax, TweenMax } from 'gsap';


declare let Winwheel: any;

@Component({
  selector: 'app-spin',
  templateUrl: './spin.component.html',
  styleUrls: ['./spin.component.scss']
})
export class SpinComponent implements AfterViewInit {
  
  @ViewChild('nav', { read: DragScrollComponent }) ds!: DragScrollComponent;

  theWheel: any;
  wheelSpinning = false;
  winningSegment: string = "";
  el_result_img: any;
  el_result_div: any;

  constructor(private modalService: NgbModal) {
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

    this.el_result_img = document.querySelector(".spin-result img");
    this.el_result_div = document.querySelector(".spin-result");
    this.setElementPosition();
  }
  
  setElementPosition(): void{
    var canvas_rect = document.getElementById('canvas')!.getBoundingClientRect();
    var center_y = (canvas_rect.bottom - canvas_rect.top) / 2;

    this.el_result_img!.setAttribute("height", "" + (canvas_rect.right - canvas_rect.left) / 2 * 0.94);
    this.el_result_div!.setAttribute("style", `bottom: ${center_y}px;`);
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
    this.el_result_img!.setAttribute("style", "display: none;");
  }

  alertPrize(): void {
    this.winningSegment = this.theWheel.getIndicatedSegment().text;

    var rect = document.getElementById('canvas')!.getBoundingClientRect();
    
    var angle = this.theWheel.animation.stopAngle;
    
    this.el_result_img!.setAttribute("src", "/assets/img/project/game/spin/result.png");
    this.el_result_img!.setAttribute("style", `transform: rotate(${(18 - angle % 36)}deg);display: initial;`)

    setTimeout(() => {
      const modalRef = this.modalService.open(GameRewardModalComponent, { centered: true, modalDialogClass: 'game-reward-modal'});
      modalRef.componentInstance.data = {
        "buttonText" : "spin again",
        'reward_item_title' : "Free Icecream for a Month",
        'qr_code' : 'assets/img/project/game/qr.png',
        'symbol_image' : 'assets/img/project/game/symbol.png',
        'reward_item_id' : "78934dwjdc",
        'reward_item_image' : 'assets/img/project/game/spin/result.png'
      }
      // handle modal button click event
      modalRef.componentInstance.onButtonClick.subscribe((receivedData: any) => {
        this.resetWheel();
      });
    }, 2000)
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
