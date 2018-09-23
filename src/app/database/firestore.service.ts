import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import { timeout } from 'q';

type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
type DocPredicate<T> = string | AngularFirestoreDocument<T>;

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private afs: AngularFirestore,
    private rtdb: AngularFireDatabase
  ) { }

  col<T>(ref: CollectionPredicate<T>, queryFn?): AngularFirestoreCollection<T> {
    return typeof ref === 'string' ? this.afs.collection<T>(ref, queryFn) : ref;
  }

  doc<T>(ref: DocPredicate<T>): AngularFirestoreDocument<T> {
    return typeof ref === 'string' ? this.afs.doc<T>(ref) : ref;
  }

  /**
   * @description Value Changes Observable
   * @param ref
   * @param queryFn
   */
  col$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<T[]> {
    return this.col(ref, queryFn).valueChanges();
  }

  /**
   * @description Firestore Document snapshot
   */
  doc$<T>(ref: DocPredicate<T>): Observable<T> {
    return this.doc(ref).snapshotChanges().pipe(map(doc => {
      return doc.payload.data() as T;
    }));
  }

  /**********
   * WRITE DATA
   *********/

   /**
    * @description Return server timestamp
    */
   get timeStamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }

     /**
    * @description Updates a firestore doc ref
    * @param ref
    * @param key
    * @param data
    */
   update<T>(ref: DocPredicate<T>, key: string, data: any) {
    return this.doc(ref + `/${key}`).update({
      ...data,
      updatedAt: this.timeStamp
    });
  }

  /**
    * @description Custom set method - add a single doc to a specified collection
    * @param ref
    * @param data
    */
   set<T>(ref: DocPredicate<T>, data: any, id?: string) {
    const timeStamp = this.timeStamp;
    // If we pass an id, don't create one (alarms only)
    const uniqueRef = id ? id : this.afs.createId();
    return this.doc(ref + `/${uniqueRef}`).set({
      ...data,
      id: uniqueRef,
      updatedAt: timeStamp,
      createdAt: timeStamp,
      deleted: false
    });
  }

}
