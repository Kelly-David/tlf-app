import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HorseService } from '../horses/horse.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public featuredHorses: Observable<any[]>;
  constructor(private horseService: HorseService) { }

  ngOnInit() {
    this.featuredHorses = this.horseService.getFeatured;
  }

}
