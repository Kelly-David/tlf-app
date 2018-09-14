import { FirestoreService } from './../database/firestore.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private db: FirestoreService
  ) { }

  get HomeText() {
    return this.db.col$('home');
  }
  public updateHomeText(key: string, data: any) {

    this.db.update('home', key, data)
            .catch(error => console.log('Home Service : update error: ' + error));
  }
}
