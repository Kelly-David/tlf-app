import { DomSanitizer } from '@angular/platform-browser';
import { Component, Input, OnChanges } from '@angular/core';
import { HorseService } from '../../horses/horse.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnChanges {

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
    const style = `background-image: url(${imageUrl}) !important; background-size: cover; background-position: center;`;
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  /**
 * Transforms a horse display name to router link format
 * @param name horse name to transform
 */
public horseNameRoute(name: string): string {
  let routeString = '';
  routeString = name.split(' ').join('-').toLowerCase();
  return routeString;
}

}
