import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { SalesComponent } from '../sales/sales.component';
import { ContactComponent } from '../contact/contact.component';
import { NewsComponent } from '../news/news.component';
import { ShowingComponent } from '../showing/showing.component';
import { HorseMainComponent } from '../horses/horse-main/horse-main.component';
import { HorseProfileComponent } from '../horses/horse-profile/horse-profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',  redirectTo: 'home' },
  { path: 'home', component: HomeComponent},
  // { path: 'about', component: AboutComponent},
  { path: 'horses', component: HorseMainComponent},
  { path: 'showing', component: ShowingComponent},
  { path: 'sales', component: SalesComponent},
  { path: 'news', component: NewsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'login', component: LoginComponent},
  { path: 'horse/:name', component: HorseProfileComponent},
  { path: '**', redirectTo: 'home'}, // Fallback route
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
