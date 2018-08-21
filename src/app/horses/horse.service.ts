import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from '../database/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class HorseService {

  private horses$: Observable<any[]>;

  constructor(
    private db: FirestoreService,
  ) {
    // Define the Horse variable
    this.horses$ = this.db.col$('horses', ref => ref
                          .where('deleted', '==', false)
                          .orderBy('name'));
   }

   get horses() {
     return this.horses$;
   }

   public getHorse(name: string) {
     return this.db.doc$(`horses/${name}`);
   }
}
