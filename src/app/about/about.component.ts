import { Observable } from 'rxjs';
import { HorseService } from './../horses/horse.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NewsService } from '../news/news.service';
import { HomeService } from '../home/home.service';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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

  public update(content: any) {
    console.log(content.text);
    this.homeService.updateHomeText(content.id, content);
  }

}
