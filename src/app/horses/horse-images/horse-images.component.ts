import { Component, OnChanges, OnInit, Input } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import { HorseService } from '../horse.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-horse-images',
  templateUrl: './horse-images.component.html',
  styleUrls: ['./horse-images.component.css']
})
export class HorseImagesComponent implements OnChanges {

  @Input() horseId: string;

  public horseImages$: Observable<any[]>;

  constructor(
    private hs: HorseService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnChanges() {
    this.horseImages$ = this.hs.horseImages(this.horseId);
  }

  public getImg(imageUrl) {
    const url = 'https://' + imageUrl;
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

}
