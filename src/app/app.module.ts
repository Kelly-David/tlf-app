import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CoreModule } from './core/core.module';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './admin/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HorseListComponent,
    LoginComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, AngularFireDatabaseModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, CoreModule,
  ],
  providers: [
    HorseService,
    FirestoreService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
