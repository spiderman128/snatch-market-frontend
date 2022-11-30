import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {

  @Output() onCloseEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.activeRoute.queryParams.subscribe(async params => {
    //   if (params && params.special) {
    //     this.tag = JSON.parse(params.special).tag;
    //     this.originalTag = JSON.parse(params.special).originalTag;
    //     this.isNew = JSON.parse(params.special).isNew;
    //     if (!this.isNew) {
    //       this.created_at = JSON.parse(params.special).created_at;
    //       this.id = JSON.parse(params.special).id;
    //     }
    //     this.image = PhotoService.instance.capturedImage;

    //     console.log(this.tag);

    //   }
    // });
  }

  // let navigationdata: NavigationExtras = {
  //   queryParams: {
  //     special: JSON.stringify({ tag: this.tag, isNew: this.isNew })
  //   },
  //   replaceUrl: true
  // };
  onHandleGroupBy(data: any) {
    switch (data) {
      case "brand":
        // this.router.navigate(['/market-place/brand']);
        break;
      case "collection":
        this.router.navigate(['/market-place/collections']);
        break;
      case "typeofrewards":
        this.router.navigate(['/market-place/rewardsByType']);
        break;

      default:
        break;
    }
  }
  onHandleApplyFilter() {
    this.router.navigate(['/market-place/brand']);
  }

  onClose() {
    this.onCloseEvent.emit('filter panel close button is calling');
  }
}
