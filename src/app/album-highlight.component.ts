import { Component } from '@angular/core';
@Component({
  selector: 'app-album-highlight',
  standalone: true,
  template: `
    <div class="w-full px-[10vw] mb-2 flex justify-center">
      <h2 class="section-title text-2xl md:text-3xl font-bold text-center" style="font-family: 'Poppins', 'Inter', sans-serif;">New Single "Orions" Out Now !</h2>
    </div>
    <section id="album" class="flex flex-col items-center justify-center w-full bg-white text-gray-800 px-[10vw] md:py-4 transition-all">
      <div class="w-full max-w-3xl flex flex-col items-center gap-4 md:gap-6">
        <div class="w-full flex justify-center">
          <a href="https://orcd.co/could-seed-druids" target="_blank" rel="noopener noreferrer" class="w-48 h-48 md:w-64 md:h-64 bg-green-100 rounded-2xl flex items-center justify-center shadow-lg animate-fade-in overflow-hidden">
            <img src="COULD_SEED_DRUIDS.jpg" alt="Orion cover" class="object-cover w-full h-full" />
          </a>
        </div>
        <a href="https://orcd.co/could-seed-druids" target="_blank" rel="noopener noreferrer" class="listen-btn inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold shadow-lg transition-all hover:scale-105 animate-fade-in">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
          Listen Now
        </a>
      </div>
    </section>
  `,
  styles: [`
    .section-title {
      color: #067469;
    }
    .listen-btn {
      background-color: #067469;
    }
    .listen-btn:hover {
      background-color: #05605a;
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
