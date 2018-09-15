import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HorseService } from '../horses/horse.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NewsService } from '../news/news.service';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public featuredHorses: Observable<any[]>;
  public newsItems: Observable<any[]>;
  public content$: Observable<any[]>;
  public editHomeText = false as boolean;
  public editFeaturedHorses = false as boolean;

  constructor(
    private horseService: HorseService,
    private sanitizer: DomSanitizer,
    private news: NewsService,
    private homeService: HomeService,
    public authService: AuthService,
    ) { }

  ngOnInit() {
    this.content$ = this.homeService.HomeText;
    this.featuredHorses = this.horseService.getFeatured;
    this.newsItems = this.news.news;
  }

  /**
   * Bypass Angular security to bind string to template
   * @param imageUrl the horse.imageURL string
   */
  public getStyle(imageUrl) {
    const style = `background-image: url(${imageUrl}) !important;
    background-size: cover; background-position: center;`;
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  public update(content: any) {
    console.log(content.text);
    this.homeService.updateHomeText(content.id, content);
  }

}
