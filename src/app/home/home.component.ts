import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HorseService } from '../horses/horse.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public featuredHorses: Observable<any[]>;

  constructor(
    private horseService: HorseService,
    private sanitizer: DomSanitizer
    ) { }

  ngOnInit() {
    this.featuredHorses = this.horseService.getFeatured;
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

}
