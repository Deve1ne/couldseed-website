import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from './hero.component';
import { AlbumHighlightComponent } from './album-highlight.component';
import { TourDatesComponent } from './tour-dates.component';
import { VideoSectionComponent } from './video-section.component';
import { BioComponent } from './bio.component';
import { AlbumLinksComponent } from './album-links.component';
import { FollowUsComponent } from './follow-us.component';
import { ContactComponent } from './contact.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterLink,
    HeroComponent,
    AlbumHighlightComponent,
    TourDatesComponent,
    VideoSectionComponent,
    BioComponent,
    AlbumLinksComponent,
    FollowUsComponent,
    ContactComponent
  ],
  template: `
    <div class="fixed top-4 right-4 z-50 flex flex-row gap-2">
      <a href="/shop/" class="text-green-700 font-medium underline hover:text-green-900 transition-colors bg-white/80 backdrop-blur px-3 py-1 rounded-full shadow">Shop</a>
      <a routerLink="/pro" class="text-green-700 font-medium underline hover:text-green-900 transition-colors bg-white/80 backdrop-blur px-3 py-1 rounded-full shadow">Pro</a>
    </div>
    <app-hero />
    <app-album-highlight />
    <app-tour-dates />
    <app-video-section />
    <app-bio />
    <app-album-links />
    <app-follow-us />
    <app-contact />
  `
})
export class HomePageComponent {}
