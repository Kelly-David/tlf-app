import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HorseService } from '../horse.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-horse-list',
  templateUrl: './horse-list.component.html',
  styleUrls: ['./horse-list.component.css']
})
export class HorseListComponent implements OnInit {

  horse = {
    state: true
  };
  public horses$: Observable<any[]>;

  constructor(
    private horseService: HorseService,
    private sanitizer: DomSanitizer,

  ) { }

  ngOnInit() {

    this.horses$ = this.horseService.horses;
  }

}
