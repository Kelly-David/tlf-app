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

  queryRef = {
    foal: 'year'
  };

  public horses$: Observable<Horse[]>;

  constructor(
    private horseService: HorseService
  ) { }

  ngOnChanges() {
    if (this.term === 'foal') {
      this.horses$ = this.horseService.customHorseSort(this.term, this.queryRef[this.term]);
    } else {
      this.getHorses();
    }
  }

  private getHorses() {
    this.horses$ = this.horseService.filterHorses(this.term);
  }

  private filterFoals(term: string) {
    this.horses$ = this.horseService.horses.pipe(map(items =>
      items.filter(item => item.year).filter(all => all)));
  }

}
