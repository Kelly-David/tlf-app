import { Component, Input, OnInit, OnDestroy} from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { HorseService } from '../horse.service';
import { ActivatedRoute, Router, NavigationEnd } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-horse-profile',
  templateUrl: './horse-profile.component.html',
  styleUrls: ['./horse-profile.component.css']
})
export class HorseProfileComponent implements OnInit, OnDestroy {

  // @Input() id: string;
  public route: string;
  public horseRoute$: Observable<any>;
  public navigationSubscription;

  constructor(
    private hs: HorseService,
    private activatedRoute: ActivatedRoute, // get params from URL
    private router: Router
  ) {
    // subscribe to the router events - storing the subscription so
   // we can unsubscribe later.
   this.navigationSubscription = this.router.events.subscribe((e: any) => {
    // If it is a NavigationEnd event re-initalise the component
    if (e instanceof NavigationEnd) {
      this.loadData();
    }
  });
   }

  ngOnInit() {
  }

  loadData() {
    this.route = this.activatedRoute.snapshot.params['name']; // Grab the id from URL params
    this.horseRoute$ = this.hs.getHorseRoute(this.route);
  }

  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we
    // don't then we will continue to run our initialiseInvites()
    // method on every navigationEnd event.
    if (this.navigationSubscription) {
       this.navigationSubscription.unsubscribe();
    }
  }

}
