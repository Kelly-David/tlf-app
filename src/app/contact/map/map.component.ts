import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public lat = 52.839605 as number;
  public lng = -6.956155 as number;

  constructor() { }

  ngOnInit() {
  }

}
