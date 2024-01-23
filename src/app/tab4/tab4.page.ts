import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Tab4Page implements OnInit {
  public datetime!: string;

  constructor() { }

  ngOnInit() {
    const date = new Date();
    let dayChange = -2;
    if (date.getDate() + dayChange <= 0) {
      dayChange = -dayChange;
    }

    date.setDate(date.getDate() + dayChange);
    this.datetime = date.toISOString();
  }
  }


