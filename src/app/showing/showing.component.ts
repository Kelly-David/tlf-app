import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showing',
  templateUrl: './showing.component.html',
  styleUrls: ['./showing.component.css']
})
export class ShowingComponent implements OnInit {

  public filter = 'show' as string;

  constructor() { }

  ngOnInit() {
  }

}
