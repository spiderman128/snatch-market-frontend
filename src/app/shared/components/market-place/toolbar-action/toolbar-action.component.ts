import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar-action',
  templateUrl: './toolbar-action.component.html',
  styleUrls: ['./toolbar-action.component.scss']
})
export class ToolbarActionComponent implements OnInit {

  @Input() isFilterShow: boolean = true;
  @Input() isSearchPanelShow: boolean = true;
  
  @Output() onFilterAction: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
  

  ngOnInit(): void {
  }
  onHandleFilterClick(data: any) {
    this.onFilterAction.emit('filter action is clicked');
  }

}
