import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public featuredHorses: string[] = ['F2fT4Pg1QE6TJa479WGc', 'YKAyF40yLhxTiGrRCJFd', 'jRkuZzxDV03Dk5iJtutL', 'hafNL9BfcPwU0TO3yJfe', ];

  constructor() { }

  ngOnInit() {
  }

}
