import { Horse } from './../../horse/horse';
import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { HorseService } from '../horse.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-horse-list',
  templateUrl: './horse-list.component.html',
  styleUrls: ['./horse-list.component.css']
})
export class HorseListComponent implements OnChanges {

  @Input() term: any;

  horse = {
    state: true
  };
  public horses$: Observable<Horse[]>;

  constructor(
    private horseService: HorseService
  ) { }

  ngOnChanges() {
    this.getHorses();

    // if (this.term !== '') {
    //   this.filterHorses(this.term);
    // }
  }

  private getHorses() {
    this.horses$ = this.horseService.filterHorses(this.term);
  }

  private filterHorses(term: string) {
    this.horses$ = this.horseService.horses.pipe(map(items =>
      items.filter(item => item.horsetype === this.term).filter(all => all)));
  }

}
