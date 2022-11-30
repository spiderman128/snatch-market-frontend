import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  itemId: number = 0;
  ngOnInit(): void {
    this.itemId = parseInt(this.activeRoute.snapshot.paramMap.get('id') || "");
    console.log(this.itemId);
  }

}
