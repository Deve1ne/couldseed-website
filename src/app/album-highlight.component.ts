import { Component } from '@angular/core';

@Component({
  selector: 'app-album-highlight',
  standalone: true,
  template: `
    <div class="w-full px-[10vw] mb-2 flex justify-center">
      <h2 class="section-title text-2xl md:text-3xl font-bold text-center" style="font-family: 'Poppins', 'Inter', sans-serif;">Premier album 'The Drop Crisis'</h2>
    </div>
    <section id="album" class="flex flex-col items-center justify-center w-full bg-white text-gray-800 px-[10vw] md:py-4 transition-all">
      <div class="w-full max-w-3xl flex flex-col items-center gap-4 md:gap-6">
        <div class="w-full flex justify-center">
          <div class="w-48 h-48 md:w-64 md:h-64 bg-green-100 rounded-2xl flex items-center justify-center shadow-lg animate-fade-in overflow-hidden">
            <img src="the_drop_crisis.jpg" alt="The Drop Crisis album cover" class="object-cover w-full h-full" />
          </div>
        </div>
        <div class="w-full flex flex-col items-center text-center">
          <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1812336403/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://couldseed.bandcamp.com/album/the-drop-crisis">The Drop Crisis de Could Seed</a></iframe>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-title {
      color: #067469;
    }
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .animate-fade-in {
      animation: fade-in 1.2s ease;
    }
  `]
})
export class AlbumHighlightComponent {}
