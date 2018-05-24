import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HorseListComponent } from '../horses/horse-list/horse-list.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { SalesComponent } from '../sales/sales.component';
import { ContactComponent } from '../contact/contact.component';
import { NewsComponent } from '../news/news.component';
import { ShowingComponent } from '../showing/showing.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',  redirectTo: 'home' },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'horses', component: HorseListComponent},
  { path: 'showing', component: ShowingComponent},
  { path: 'sales', component: SalesComponent},
  { path: 'news', component: NewsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'home'}, // Fallback route (TODO page not found component)
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
