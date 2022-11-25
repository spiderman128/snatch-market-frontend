import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { GameRewardModalComponent } from '@modals/game-reward-modal/game-reward-modal.component';
// @ts-ignore
import { ScratchCard, SCRATCH_TYPE } from 'scratchcard-js';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snatch',
  templateUrl: './snatch.component.html',
  styleUrls: ['./snatch.component.scss']
})
export class SnatchComponent implements OnInit {

  @ViewChild('nav', { read: DragScrollComponent }) ds!: DragScrollComponent;

  imageName = '1.png';
  isStartScratch = false;
  scratchObject: any;
  scratchData = {
    scratchType: SCRATCH_TYPE.LINE,
    containerWidth: 300, //scContainer.offsetWidth,
    containerHeight: 300,
    imageForwardSrc: '/assets/img/project/game/snatch/scratch.png',
    imageBackgroundSrc: '/assets/img/project/game/snatch/1.png',
    // htmlBackground:
    //   '<div class="cardamountcss"><div class="won-amnt">Try</div><div class="won-text">Again<br></div></div>',

    clearZoneRadius: 30,
    nPoints: 30,
    pointSize: 4,
    callback: () => {
      console.log('Now the window will reload !');
      this.isStartScratch = false;
      const modalRef = this.modalService.open(GameRewardModalComponent, { centered: true, modalDialogClass: 'game-reward-modal' });
      modalRef.componentInstance.data = {
        "buttonText": "spin again",
        'reward_item_title': "Free Icecream for a Month",
        'qr_code': 'assets/img/project/game/qr.png',
        'symbol_image': 'assets/img/project/game/nike.png',
        'reward_item_id': "78934dwjdc",
        'reward_item_image': 'assets/img/project/game/spin/result.png'
      }
      // handle modal button click event
      modalRef.componentInstance.onButtonClick.subscribe((receivedData: any) => {
        console.log("modal button is clicked on spin wheel page");
      });
    },
  };

  constructor(private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
    this.imageName = '1.png';
    setTimeout(() => {
      this.createNewScratchCard();
    }, 100);
  }

  onResize(event: any) {
    // const scContainer = document.getElementById('js--sc--container');
    // const canvasContainer = document.querySelector('#js--sc--container canvas');


    // var styles = getComputedStyle(scContainer!),
    //   w = parseInt(styles.getPropertyValue("width"), 10),
    //   h = parseInt(styles.getPropertyValue("height"), 10);
    // // canvasContainer?.setAttribute('width', w.toString());
    // // canvasContainer?.setAttribute('height', h.toString());
    // canvasContainer?.setAttribute('style', 'width:' + w.toString() + 'px; height:' + h.toString() + 'px;');
    window.location?.reload();
  }
  createNewScratchCard() {
    // console.log(this.scratchData);
    const scContainer = document.getElementById('js--sc--container');
    // scContainer?.style.setProperty('height', scContainer!.offsetWidth * 0.55 + 'px');
    this.scratchData.containerWidth = scContainer!.offsetWidth;
    this.scratchData.containerHeight = scContainer!.offsetHeight;
    this.scratchObject = new ScratchCard('#js--sc--container', this.scratchData);
    // Init
    this.scratchObject.init()
      .then(() => {
        this.scratchObject.htmlBackground = this.scratchObject.canvas.addEventListener('scratch.move', () => {
          let percent = this.scratchObject.getPercent().toFixed(2);
          console.log(percent);
          if (percent >= 80) {
            this.imageName = '1.png'
          }

        });
      })
      .catch((error: any) => {
        // image not loaded
        alert(error.message);
      });

  }

  onHanldeStartScratch(data: any) {
    this.isStartScratch = true;
  }
  // setScratchMessage(param: any) {
  //   console.log(param);
  //   switch (param) {
  //     case '20ARAS1301': {
  //       this.scratchData.htmlBackground =
  //         '<div class="cardamountcss"><div class="won-amnt">Try</div><div class="won-text">Again<br></div></div>';
  //       this.type = 'tryAgain';
  //       break;
  //     }
  //     case '20ARAS1302': {
  //       this.scratchData.htmlBackground =
  //         '<div class="cardamountcss"><div class="won-amnt">राधे राधे ||</div><div class="won-text">आप नाना नानी <br>बनने वाले हैं  </div></div>';
  //       this.type = 'win';
  //       break;
  //     }
  //     case '20ARAS1303': {
  //       this.scratchData.htmlBackground =
  //         '<div class="cardamountcss"><div class="won-amnt">Hello to my</div><div class="won-text">Inna-national<br>मामू  </div></div>';
  //       this.type = 'win';
  //       break;
  //     }
  //     case '20ARAS1304': {
  //       this.scratchData.htmlBackground =
  //         '<div class="cardamountcss"><div class="won-amnt">Hi Chachu</div><div class="won-text">HALA MADRID !!<br></div></div>';

  //       this.type = 'win';
  //       break;
  //     }
  //     case '20ARAS1305': {
  //       this.scratchData.htmlBackground =
  //         '<div class="cardamountcss"><div class="won-amnt">बधाई हो ||</div><div class="won-text">आप दादा दादी  <br>बनने वाले हैं  </div></div>';
  //       this.type = 'win';
  //       break;
  //     }
  //   }
  // }

}
