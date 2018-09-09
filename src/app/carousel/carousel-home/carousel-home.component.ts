import { Observable } from 'rxjs';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NewsService } from '../../news/news.service';

@Component({
  selector: 'app-carousel-home',
  templateUrl: './carousel-home.component.html',
  styleUrls: ['./carousel-home.component.css']
})
export class CarouselHomeComponent implements AfterViewInit {

  public newsItems: Observable<any[]>;

  constructor(
    private sanitizer: DomSanitizer,
    private news: NewsService
  ) { }

  ngAfterViewInit() {
    this.newsItems = this.news.news;
  }

  public getStyle(imageUrl) {
    const style = `background-image: url(${imageUrl}) !important; background-size: cover; background-position: center; height: 25rem`;
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

}
