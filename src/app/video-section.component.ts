import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { SafeUrlPipe } from './safe-url.pipe';

interface Video {
  title: string;
  youtubeUrl: string;
}

@Component({
  selector: 'app-video-section',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  template: `
    <section id="video" class="w-full bg-white text-gray-800 px-0 py-0 flex flex-col items-center transition-all">
      <div class="w-full flex flex-col items-center">
        <h2 class="section-title text-2xl md:text-3xl font-bold mb-8 text-center" style="font-family: 'Poppins', 'Inter', sans-serif;">Vidéos</h2>
        <div class="w-full">
          <ng-container *ngFor="let video of videos()">
            <div class="w-full flex items-center justify-center mb-8 px-[10vw]">
              <iframe
                class="w-full aspect-video rounded-none"
                [src]="video.youtubeUrl | safeUrl"
                frameborder="0"
                allowfullscreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                style="display: block;"
              ></iframe>
            </div>
          </ng-container>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-title {
      color: #067469;
    }
  `]
})
export class VideoSectionComponent implements OnInit {
  videos = signal<Video[]>([]);

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Video[]>('videos.json').subscribe({
      next: data => this.videos.set(data),
      error: err => console.error('Impossible de charger videos.json', err)
    });
  }
}
