import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a routerLink="/" class="fixed top-4 right-4 z-50 text-green-700 font-medium underline hover:text-green-900 transition-colors bg-white/80 backdrop-blur px-3 py-1 rounded-full shadow">Accueil</a>
    <section class="w-full min-h-screen bg-white text-gray-800 px-4 py-16 flex flex-col items-center justify-center text-center transition-all">
      <div class="w-full max-w-xl flex flex-col items-center">
        <h1 class="section-title text-3xl md:text-4xl font-bold mb-4" style="font-family: 'Poppins', 'Inter', sans-serif;">Shop bientôt disponible</h1>
        <p class="text-gray-500">La boutique Could Seed arrive prochainement. Revenez bientôt !</p>
      </div>
    </section>
  `,
  styles: [`
    .section-title {
      color: #067469;
    }
  `]
})
export class ShopPageComponent {}
