import { Component, OnChanges, NgModule, Input } from '@angular/core';
import { NewsService } from '../news.service';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-news-images',
  templateUrl: './news-images.component.html',
  styleUrls: ['./news-images.component.css']
})
export class NewsImagesComponent implements OnChanges {

  @Input() newsItemId: string;
  public images$: Observable<any[]>;

  constructor(
    private ns: NewsService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnChanges() {
    this.images$ = this.ns.getNewsItemImages(this.newsItemId);
  }

      /**
   * Bypass Angular security to bind string to template
   * @param imageUrl the horse.imageURL string
   */
  public getImageURL(imageUrl) {
    // const style = `background-image: url(${imageUrl}) !important; background-size: cover; background-position: center`;
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

}
