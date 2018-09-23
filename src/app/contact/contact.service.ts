import { Injectable } from '@angular/core';
import { FirestoreService } from '../database/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private db: FirestoreService
  ) { }

  public saveMail(data: any) {
    return this.db.set('email', data).then(() => {
      console.log('Email Saved' + data);
    });
  }
}
