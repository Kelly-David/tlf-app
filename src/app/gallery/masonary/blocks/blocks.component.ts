import { Component, OnChanges, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HorseService } from '../../../horses/horse.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnChanges {

  @Input() imagesToShow: Array<string>;

  public images = new Array();
  public myObservables: Observable<any>[] = new Array();


  public horse$: Observable<any>;

  constructor(
    private sanitizer: DomSanitizer,
    private horseService: HorseService) { }

  ngOnChanges() {
    this.horse$ = this.horseService.getHorse(this.imagesToShow[0]);

    this.getImagesToShow();
  }

  /**
   * Bypass Angular security to bind string to template
   * @param imageUrl the horse.imageURL string
   */
  public getStyle(imageUrl) {
    const style = `background-image: url(${imageUrl}) !important; background-size: cover; background-position: center`;
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  private getImagesToShow() {
    this.imagesToShow.forEach(function(name) {
      this.horseService.getHorse(name).forkJoin(this.myObservables);
    });
  }

}
