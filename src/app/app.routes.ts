import { Routes } from '@angular/router';
import { ProPageComponent } from './pro-page.component';
import { HomePageComponent } from './home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'pro', component: ProPageComponent },
];
