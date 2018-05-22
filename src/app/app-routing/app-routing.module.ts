import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HorseListComponent } from '../horses/horse-list/horse-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',  redirectTo: 'horses/' },
  { path: 'horses/', component: HorseListComponent},
  { path: '**', redirectTo: 'horses/'}, // Fallback route (TODO page not found component)
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
