import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { AuthService } from './core/auth.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

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
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
    ) {
    this.user = authService.userId$;

    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     console.log(event);
    //   }
    // });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }))
      .pipe(filter((route) => route.outlet === 'primary'))
      .pipe(mergeMap((route) => route.data))
      .subscribe((event) =>
        console.log(event)
        );
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
