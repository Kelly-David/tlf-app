import { Observable } from 'rxjs';
import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  public news$: Observable<any[]>;

  constructor(
    private ns: NewsService
  ) { }

  ngOnInit() {
    this.news$ = this.ns.news;
  }

}
