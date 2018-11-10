import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HorseService } from '../../horses/horse.service';

@Component({
  selector: 'app-home-tiles',
  templateUrl: './home-tiles.component.html',
  styleUrls: ['./home-tiles.component.css']
})
export class HomeTilesComponent implements OnInit {

  public horses$: Observable<any[]>;

  constructor(
    private hs: HorseService
  ) { }

  ngOnInit() {
    this.horses$ = this.hs.getFeatured;
  }

}
