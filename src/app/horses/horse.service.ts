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

   get horses(): Observable<any[]>  {
     return this.horses$;
   }

   get getFeatured(): Observable<any[]>  {
    return this.featuredHorses$;
  }

   public getHorse(name: string): Observable<{}>  {
     return this.db.doc$(`horses/${name}`);
   }

   public getHorseRoute(name: string): Observable<{}> {
    return this.db.doc$(`horseroutes/${name}`);
  }

  public getHorseResults(id: string): Observable<any[]> {
    return this.db.col$(`horses/${id}/results`);
  }

  public filterHorses(filter: string): Observable<any[]> {
    return this.db.col$(`horses`, ref =>  ref.where(`type`, 'array-contains', filter).orderBy('name'));
  }

}
