import { Component, OnChanges, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HorseService } from '../horse.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.css']
})
export class HorseComponent implements OnChanges {

  @Input() id: string;
  public horse$: Observable<any>;

  constructor(
    private hs: HorseService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnChanges() {
    this.horse$ = this.hs.getHorse(this.id);
  }

      /**
   * Bypass Angular security to bind string to template
   * @param imageUrl the horse.imageURL string
   */
  public getStyle(imageUrl) {
    const style = `background-image: url(${imageUrl}) !important; background-size: cover; background-position: center`;
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  public getImg(imageUrl) {
    const url = 'https://' + imageUrl;
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
}
