import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  @Input() theme: 'light' | 'dark' = 'dark';

  searchActive: boolean = false;

  constructor() {}

  ngOnInit(): void {
    console.log(this.theme);
  }

  public toggleSearch(): void {
    this.searchActive = !this.searchActive;
  }
}
