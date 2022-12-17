import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarItem } from '@interfaces/sidebar-item';

@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './sidebar-layout.component.html',
  styleUrls: ['./sidebar-layout.component.scss']
})
export class SidebarLayoutComponent implements OnInit {

  @Input() routesData: SidebarItem[] = [];

  @Output() onCloseEvent: EventEmitter<any> = new EventEmitter<any>(); 
  @Output() onItemClickEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickClose() {
    this.onCloseEvent.emit('');
  }

  onClickItem(item: SidebarItem) {
    this.router.navigate([item.itemUrl]);
  }

}
