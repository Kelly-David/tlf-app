import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from '../database/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class HorseService {

  private horses$: Observable<any[]>;
  private featuredHorses$: Observable<any[]>;

  constructor(
    private db: FirestoreService,
  ) {
    // Define the Horse variable
    this.horses$ = this.db.col$('horses', ref => ref
                          .where('deleted', '==', false)
                          .orderBy('name'));

    this.featuredHorses$ = this.db.col$('featuredhorses');
   }

   get horses() {
     return this.horses$;
   }

   get getFeatured() {
    return this.featuredHorses$;
  }

   public getHorse(name: string) {
     return this.db.doc$(`horses/${name}`);
   }

   public getHorseRoute(name: string) {
    return this.db.doc$(`horseroutes/${name}`);
  }

}
