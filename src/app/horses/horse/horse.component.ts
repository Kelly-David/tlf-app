import { Component, OnChanges, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HorseService } from '../horse.service';

@Component({
  selector: 'app-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.css']
})
export class HorseComponent implements OnChanges {

  @Input() id: string;
  public horse$: Observable<any>;

  constructor(
    private hs: HorseService
  ) { }

  ngOnChanges() {
    this.horse$ = this.hs.getHorse(this.id);
  }

}
