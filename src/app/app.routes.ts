import { Routes } from '@angular/router';
import { ProPageComponent } from './pro-page.component';
import { HomePageComponent } from './home-page.component';
import { ShopPageComponent } from './shop-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'pro', component: ProPageComponent },
  { path: 'shop', component: ShopPageComponent },
];
