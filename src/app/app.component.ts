import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Turra Lodge Farm' as string;
  collapse = true as boolean;
  user: Observable<any>;

  constructor(private authService: AuthService) {
    this.user = authService.userId$;
   }

  ngOnInit() {
  }

  toggleSidebar() {
    this.collapse = !this.collapse;
  }

  hideSideBar() {
    this.collapse = true;
  }

}
