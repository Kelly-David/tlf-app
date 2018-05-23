import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { HorseListComponent } from './horses/horse-list/horse-list.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HorseService } from './horses/horse.service';
import { FirestoreService } from './database/firestore.service';


@NgModule({
  declarations: [
    AppComponent,
    HorseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, AngularFireDatabaseModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
  ],
  providers: [
    HorseService,
    FirestoreService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
