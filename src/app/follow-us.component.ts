import { Component } from '@angular/core';

@Component({
  selector: 'app-follow-us',
  standalone: true,
  template: `
    <section id="follow" class="w-full bg-white text-gray-800 px-4 py-6 md:py-10 flex flex-col items-center transition-all">
      <div class="w-full max-w-xl flex flex-col items-center">
        <h2 class="section-title text-2xl md:text-3xl font-bold mb-4 text-center" style="font-family: 'Poppins', 'Inter', sans-serif;">Nous suivre</h2>
        <div class="flex flex-row gap-4 justify-center">
          <a href="https://www.facebook.com/couldseed" target="_blank" rel="noopener noreferrer" class="group flex flex-col items-center" tabindex="0">
            <div class="w-14 h-14 flex items-center justify-center rounded-full bg-transparent hover:bg-green-200 transition-colors shadow animate-fade-in">
              <img src="fb.png" alt="Facebook" class="w-8 h-8" />
            </div>
            <span class="mt-2 text-gray-500 text-sm group-hover:text-green-600 transition-colors">Facebook</span>
          </a>
          <a href="https://www.instagram.com/couldseed/" target="_blank" rel="noopener noreferrer" class="group flex flex-col items-center" tabindex="0">
            <div class="w-14 h-14 flex items-center justify-center rounded-full bg-transparent hover:bg-green-200 transition-colors shadow animate-fade-in">
              <img src="instagram.png" alt="Instagram" class="w-8 h-8" />
            </div>
            <span class="mt-2 text-gray-500 text-sm group-hover:text-green-600 transition-colors">Instagram</span>
          </a>
          <a href="https://couldseed.bandcamp.com/" target="_blank" rel="noopener noreferrer" class="group flex flex-col items-center" tabindex="0">
            <div class="w-14 h-14 flex items-center justify-center rounded-full bg-transparent hover:bg-green-200 transition-colors shadow animate-fade-in">
              <img src="bandcamp2.png" alt="Bandcamp" class="w-8 h-8" />
            </div>
            <span class="mt-2 text-gray-500 text-sm group-hover:text-green-600 transition-colors">Bandcamp</span>
          </a>
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
export class FollowUsComponent {}
