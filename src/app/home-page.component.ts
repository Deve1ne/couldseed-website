import { Component } from '@angular/core';
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
