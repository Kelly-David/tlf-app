import { HorseService } from './../horse.service';
import { Component, OnChanges, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-horse-result-list',
  templateUrl: './horse-result-list.component.html',
  styleUrls: ['./horse-result-list.component.css']
})
export class HorseResultListComponent implements OnChanges {

  @Input() id: string;
  public results$: Observable<any[]>;

  constructor(
    private hs: HorseService
  ) { }

  ngOnChanges() {
    this.results$ = this.hs.getHorseResults(this.id);
  }

}
