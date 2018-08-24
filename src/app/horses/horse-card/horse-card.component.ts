import { Component, OnChanges, Input } from '@angular/core';
import { HorseService } from '../horse.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-horse-card',
  templateUrl: './horse-card.component.html',
  styleUrls: ['./horse-card.component.css']
})
export class HorseCardComponent implements OnChanges {

  @Input() id: string;

  public horse$: Observable<{}>;

  constructor(private hs: HorseService, private sanitizer: DomSanitizer) { }

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

}
