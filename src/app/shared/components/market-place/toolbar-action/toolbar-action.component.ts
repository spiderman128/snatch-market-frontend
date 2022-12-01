import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar-action',
  templateUrl: './toolbar-action.component.html',
  styleUrls: ['./toolbar-action.component.scss']
})
export class ToolbarActionComponent implements OnInit {

  @Input() isFilterShow: boolean = true;
  @Input() isSearchPanelShow: boolean = true;

  @Output() onToggleAction: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) { }
  

  ngOnInit(): void {
  }
  onHandleFilterClick(data: any) {
    this.onToggleAction.emit('filter action is clicked');
  }
  onHandleNew(event: any) {
    this.router.navigate(['/market-place/new']);
  }
}
