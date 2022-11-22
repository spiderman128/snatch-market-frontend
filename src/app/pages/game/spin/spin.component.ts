import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spin',
  templateUrl: './spin.component.html',
  styleUrls: ['./spin.component.scss']
})
export class SpinComponent implements OnInit {
  public spin_items: any = [
    {'fillStyle' : '#eae56f', 'text' : 'Segment 1'},
    {'fillStyle' : '#89f26e', 'text' : 'Segment 2'},
    {'fillStyle' : '#7de6ef', 'text' : 'Segment 3'},
    {'fillStyle' : '#e7706f', 'text' : 'Segment 4'}
  ];

  constructor() { }

  ngOnInit(): void {
  }
  before(): void {
    console.log('before');
  }
  after(): void{
    console.log('after');
  }
}
