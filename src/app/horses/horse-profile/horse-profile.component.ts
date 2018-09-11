import { Component, Input, OnInit } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { HorseService } from '../horse.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-horse-profile',
  templateUrl: './horse-profile.component.html',
  styleUrls: ['./horse-profile.component.css']
})
export class HorseProfileComponent implements OnInit {

  // @Input() id: string;
  public route: string;
  public horseRoute$: Observable<any>;

  constructor(
    private hs: HorseService,
    private activatedRoute: ActivatedRoute, // get params from URL
  ) { }

  ngOnInit() {
    this.route = this.activatedRoute.snapshot.params['name']; // Grab the id from URL params
    this.horseRoute$ = this.hs.getHorseRoute(this.route);
  }

}
