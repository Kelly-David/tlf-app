import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HorseService } from '../horses/horse.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  public saleHorses$: Observable<any[]>;
  public soldHorses$: Observable<any[]>;
  public filter = 'sales' as string;

  constructor(
    private hs: HorseService
  ) { }

  ngOnInit() {
    this.getAvailableHorses();
    // this.getSoldHorses();
    this.filterSoldHorses();
  }

  private getAvailableHorses() {
    this.saleHorses$ = this.hs.filterHorses(this.filter);
  }

  private getSoldHorses() {
    this.soldHorses$ = this.hs.soldHorses();
  }

  private filterSoldHorses() {
    const name = 'Turra Lodge Farm';
    this.soldHorses$ = this.hs.soldHorses().pipe(
      map(
        items => items.filter(
          item => item.owner !== name)
          .filter(all => all)));
  }

}
