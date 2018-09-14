import { Component, OnChanges, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { HorseService } from '../../../horses/horse.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnChanges {

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
