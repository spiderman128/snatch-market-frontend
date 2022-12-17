import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { setSidebarNavsData } from '../store/dashboard.action';
import { SidebarItem } from '@interfaces/sidebar-item';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};
@Component({
  selector: 'app-merchant-portal',
  templateUrl: './merchant-portal.component.html',
  styleUrls: ['./merchant-portal.component.scss']
})
export class MerchantPortalComponent implements OnInit {

  sidebarItems: SidebarItem[] = [];
  public chartOptions: Partial<ChartOptions>;

  isUser: boolean = false;

  @ViewChild("chart") chart!: ChartComponent;
  constructor(private store: Store) {
    this.chartOptions = {
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
          color: '#000'
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
          color: '#FF7200'
        }
      ],
      chart: {
        type: "bar",
        height: 200
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
        }
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ]
      },
      yaxis: {
        title: {
          text: ""
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return "$ " + val + " thousands";
          }
        }
      }
    };
  }

  ngOnInit(): void {
    this.sidebarItems = this.onGetSidebarItems();
    console.log(this.sidebarItems);
    this.store.dispatch(setSidebarNavsData({ data: this.sidebarItems }));
  }
  onGetSidebarItems(): SidebarItem[] {
    return [
      {
        title: 'Dashboard',
        activeImage: 'assets/img/project/dashboard/dashboard_active.png',
        image: 'assets/img/project/dashboard/dashboard.png',
        isActive: true,
        isDot: true,
        itemUrl: '/dashboard/index'
      },
      {
        title: 'Manage Users',
        activeImage: 'assets/img/project/dashboard/user_active.png',
        image: 'assets/img/project/dashboard/user.png',
        isActive: false,
        isDot: true,
        itemUrl: '/dashboard/manage-user'
      },
      {
        title: 'Manage Collection',
        activeImage: 'assets/img/project/dashboard/collection_active.png',
        image: 'assets/img/project/dashboard/collection.png',
        isActive: false,
        isDot: true,
        itemUrl: '/dashboard/manage-collection'
      },
      {
        title: 'Create Collection',
        activeImage: 'assets/img/project/dashboard/add.png',
        image: 'assets/img/project/dashboard/add.png',
        isActive: false,
        isDot: true,
        itemUrl: '/dashboard/index'
      },
      {
        title: 'Setting',
        activeImage: 'assets/img/project/dashboard/setting_active.png',
        image: 'assets/img/project/dashboard/setting.png',
        isActive: false,
        isDot: false,
        itemUrl: '/dashboard/index'
      }
    ]
  }

}
