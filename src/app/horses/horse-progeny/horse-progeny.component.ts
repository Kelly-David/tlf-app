import { Observable } from 'rxjs';
import { Component, Input, OnChanges } from '@angular/core';
import { HorseService } from '../horse.service';

@Component({
  selector: 'app-horse-progeny',
  templateUrl: './horse-progeny.component.html',
  styleUrls: ['./horse-progeny.component.css']
})
export class HorseProgenyComponent implements OnChanges {

  @Input() id: string;
  public foals$: Observable<any[]>;

  constructor(
    private hs: HorseService
  ) { }

  ngOnChanges() {
    this.foals$ = this.hs.getHorseFoals(this.id);
  }

}
