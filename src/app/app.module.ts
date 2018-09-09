import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SalesComponent } from './sales/sales.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { ShowingComponent } from './showing/showing.component';
import { CarouselModule } from 'ngx-bootstrap';
import { CarouselHomeComponent } from './carousel/carousel-home/carousel-home.component';
import { HorseCardComponent } from './horses/horse-card/horse-card.component';
import { HorseMainComponent } from './horses/horse-main/horse-main.component';
import { BlockComponent } from './gallery/masonary/block/block.component';
import { NewsItemComponent } from './news/news-item/news-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HorseListComponent,
    LoginComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    SalesComponent,
    NewsComponent,
    ContactComponent,
    ShowingComponent,
    CarouselHomeComponent,
    HorseCardComponent,
    HorseMainComponent,
    BlockComponent,
    NewsItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, AngularFireDatabaseModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, CoreModule,
    CarouselModule.forRoot(),
  ],
  providers: [
    HorseService,
    FirestoreService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
