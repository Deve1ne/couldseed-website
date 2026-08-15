import { Component, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Album {
  title: string;
  url: string;
}

@Component({
  selector: 'app-album-links',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="albums" class="w-full bg-white text-gray-800 px-4 py-6 md:py-10 flex flex-col items-center transition-all">
      <div class="w-full max-w-2xl">
        <h2 class="section-title text-2xl md:text-3xl font-bold mb-4 text-center" style="font-family: 'Poppins', 'Inter', sans-serif;">Albums</h2>
        <ul class="flex flex-col gap-3">
          <li *ngFor="let album of albums()" class="flex flex-col md:flex-row md:justify-between md:items-center bg-gray-50 rounded-xl px-6 py-4 shadow">
            <span class="font-semibold text-lg text-gray-700">{{ album.title }}</span>
            <a [href]="album.url" target="_blank" rel="noopener" class="mt-2 md:mt-0 text-green-700 font-medium underline hover:text-green-500 transition-colors" tabindex="0">Écouter</a>
          </li>
        </ul>
      </div>
    </section>
  `,
  styles: [`
    .section-title {
      color: #067469;
    }
  `]
})
export class AlbumLinksComponent implements OnInit {
  albums = signal<Album[]>([]);

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Album[]>('albums.json').subscribe({
      next: data => this.albums.set(data),
      error: err => console.error('Impossible de charger albums.json', err)
    });
  }
}
