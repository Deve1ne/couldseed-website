import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="hero" class="flex flex-col items-center justify-centen bg-white text-gray-800 px-4 md:pt-8 md:py-16 transition-all">
      <div class="w-full max-w-2xl text-center">
        <img src="logo_could_seed.png" alt="Could Seed" class="mx-auto mb-4 w-48 md:w-72 h-auto" />
        <div class="w-full h-64 md:h-[420px] bg-green-100 rounded-xl flex items-center justify-center mb-4 animate-fade-in overflow-hidden">
          <img src="bandpicture.jpg" alt="Could Seed" class="object-cover w-full h-full" />
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
export class HeroComponent {}
