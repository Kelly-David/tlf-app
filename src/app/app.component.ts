import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Turra Lodge Farm' as string;
  collapse = true as boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.collapse = !this.collapse;
  }

  hideSideBar() {
    this.collapse = true;
  }

}
