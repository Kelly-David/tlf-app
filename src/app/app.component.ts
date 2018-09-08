import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './core/auth.service';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Turra Lodge Farm' as string;
  collapse = true as boolean;
  user: Observable<any>;

  constructor(
    private authService: AuthService,
    private router: Router) {
    this.user = authService.userId$;
   }

  ngOnInit() {
    this.collapse = true;

    this.router.events.subscribe(path => {
      this.collapse = true;
    });
  }

  toggleSidebar() {
    this.collapse = !this.collapse;
  }

  hideSideBar() {
    this.collapse = true;
  }

}
