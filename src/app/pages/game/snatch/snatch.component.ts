import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { ScratchCard, SCRATCH_TYPE } from 'scratchcard-js';

@Component({
  selector: 'app-snatch',
  templateUrl: './snatch.component.html',
  styleUrls: ['./snatch.component.scss']
})
export class SnatchComponent implements OnInit {

  imageName = '1.png';

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
    },
  };

  constructor() { }

  ngOnInit(): void {
    this.imageName = '1.png';
    setTimeout(() => {
      this.createNewScratchCard();
    }, 100);
  }

  createNewScratchCard() {
    console.log(this.scratchData);
    const scContainer = document.getElementById('js--sc--container');
    scContainer?.style.setProperty('height', scContainer!.offsetWidth * 0.8 + 'px');
    this.scratchData.containerWidth = scContainer!.offsetWidth;
    this.scratchData.containerHeight = scContainer!.offsetWidth * 0.8;
    const sc = new ScratchCard('#js--sc--container', this.scratchData);
    // Init
    sc.init()
      .then(() => {
        sc.htmlBackground = sc.canvas.addEventListener('scratch.move', () => {
          let percent = sc.getPercent().toFixed(2);
          console.log(percent);
          // if (percent < 30) {
          //   this.type = 'tryAgain';
          //   this.imageName = 'bad.ico';
          // } else {
          //   if (this.type == 'win') {
          //     this.imageName = 'baby.jpeg';
          //   }
          //   if (this.type != 'win') {
          //     this.imageName = 'bad.ico';
          //   }
          // }
          this.imageName = '1.png'
        });
      })
      .catch((error: any) => {
        // image not loaded
        alert(error.message);
      });
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
