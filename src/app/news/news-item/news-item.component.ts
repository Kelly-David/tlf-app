import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnChanges {

  @Input() id: string;

  constructor() { }

  ngOnChanges() {

  }

}
