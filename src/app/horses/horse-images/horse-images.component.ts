import { Component, OnChanges, Input } from '@angular/core';
import { HorseService } from '../horse.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

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
    private sanitizer: DomSanitizer
  ) { }

  ngOnChanges() {
    this.horseImages$ = this.hs.horseImages(this.horseId);
  }

}
