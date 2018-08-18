import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-carousel-home',
  templateUrl: './carousel-home.component.html',
  styleUrls: ['./carousel-home.component.css']
})
export class CarouselHomeComponent implements OnInit {

  images: Array<string>;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    // this._http.get('https://picsum.photos/list')
    //     .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))
    //     .subscribe(images => this.images = images);
  }

  private _randomImageUrls(images: Array<{id: number}>): Array<string> {
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/900/500?image=${randomId}`;
    });
  }

  public getStyle(imageUrl) {
    const style = `background-image: url(${imageUrl}) !important; background-size: cover; background-position: center; height: 25rem`;
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

}
