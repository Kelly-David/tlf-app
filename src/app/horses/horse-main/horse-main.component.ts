import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horse-main',
  templateUrl: './horse-main.component.html',
  styleUrls: ['./horse-main.component.css']
})
export class HorseMainComponent implements OnInit {

  public filter = 'breeding' as string;

  constructor() { }

  ngOnInit() {
  }

  public filterHorseList(param: string) {
    this.filter = param;
  }



}
