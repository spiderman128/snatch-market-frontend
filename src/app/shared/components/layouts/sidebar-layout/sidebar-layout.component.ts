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

  // @Output() onCloseEvent: EventEmitter<any> = new EventEmitter<any>(); 
  @Output() onItemClickEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickClose() {
    const sidebarContentDom = document.querySelector('.sidebar-content');
    const toggleButtonDom = document.querySelector('.toggle-menu-btn');
    toggleButtonDom?.classList.remove('display-none');
    toggleButtonDom?.classList.add('display-block');
    sidebarContentDom?.classList.remove('display-block');
    sidebarContentDom?.classList.add('display-none')
    // this.onCloseEvent.emit('');
  }

  onClickItem(item: SidebarItem) {
    this.router.navigate([item.itemUrl]);
  }
  onClickToggleButton() {
    const sidebarContentDom = document.querySelector('.sidebar-content');
    const toggleButtonDom = document.querySelector('.toggle-menu-btn');
    toggleButtonDom?.classList.remove('display-block');
    toggleButtonDom?.classList.add('display-none');
    sidebarContentDom?.classList.remove('display-none');
    sidebarContentDom?.classList.add('display-block')
  }
}
