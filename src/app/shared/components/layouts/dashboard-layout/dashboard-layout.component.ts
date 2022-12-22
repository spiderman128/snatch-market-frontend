import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SidebarItem } from '@interfaces/sidebar-item';
import { setSidebarNavsData } from 'src/app/pages/dashboard/store/dashboard.action';
import { selectSidebarNavState } from 'src/app/pages/dashboard/store/dashboard.select';
import { Store, select } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit, OnDestroy {

  @Input() isLoading : boolean = false;
  @Input() headerTheme : 'light' | 'dark' = 'dark';
  sidebarNavs: SidebarItem[] = [];
  sidebarNavs$ = this.store.select(selectSidebarNavState);
  destroyed$ = new Subject<void>();

  constructor(private store: Store) {}
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  ngOnInit(): void {
    this.sidebarNavs$.pipe(takeUntil(this.destroyed$)).subscribe(data => {
      console.log(data);
      this.sidebarNavs = data;
    })
  }

  onCloseSidebar(event: any) {
    
  }
}
