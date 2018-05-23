import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, pipe } from 'rxjs';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: Observable<any>;
  public userIdString = new Subject<string>();
  public userId$ = this.userIdString.asObservable();
  public uString: string;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
  ) {

    // Define the User variable
    this.userId$ = this.afAuth.authState.pipe(switchMap(user => {
      if (user) {
        this.userIdString.next(user.uid);
        this.uString = user.uid;
        console.log(user.uid);
        return user.uid;
      } else {
        return new Observable<null>();
      }
    }));
  }

  /**
   * Login with email and password
   * @param email
   * @param password
   */
  public login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(_ => this.router.navigate(['/horses/']))
      .catch(error => console.log(error));
  }

   /**
   * Logout
   */
  public signOut() {
    return this.afAuth.auth.signOut()
    .then(() => {
      this.router.navigate(['/login']);
    })
    .then(() => {
      // Force a refresh to unsubscribe
      this.refresh();
    });
  }

  /**
   * Refresh the window
   */
  private refresh(): void {
    window.location.reload();
  }


}
