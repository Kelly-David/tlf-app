import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from '../database/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private news$: Observable<any[]>;

  constructor(
    private db: FirestoreService,
  ) {
    // Define the Horse variable
    this.news$ = this.db.col$('news', ref => ref
      .orderBy('date', 'desc'));
  }

  get news() {
    return this.news$;
  }
}
