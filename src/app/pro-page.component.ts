import { Component } from '@angular/core';

@Component({
  selector: 'app-pro-page',
  standalone: true,
  template: `
    <section class="w-full min-h-screen bg-white text-gray-800 px-4 py-16 flex flex-col items-center transition-all">
      <div class="w-full max-w-2xl flex flex-col items-center">
        <h1 class="section-title text-3xl md:text-4xl font-bold mb-8" style="font-family: 'Poppins', 'Inter', sans-serif;">Could Seed</h1>
        <div class="w-full bg-gray-50 rounded-xl px-6 py-6 shadow mb-8">
          <h2 class="section-title text-xl font-semibold mb-2">Section Pro (FR)</h2>
          <p class="mb-4">Vous pouvez télécharger l'EPK (Electronic Press Kit) et le rider technique du groupe en utilisant les liens ci-dessous :</p>
          <ul class="list-disc list-inside mb-2">
            <li><a href="#" class="text-green-700 underline hover:text-green-900">Télécharger l'EPK</a></li>
            <li><a href="COULD_SEED_TECHNICAL_RIDER_FR.pdf" download class="text-green-700 underline hover:text-green-900">Télécharger le rider</a></li>
          </ul>
        </div>
        <div class="w-full bg-gray-50 rounded-xl px-6 py-6 shadow">
          <h2 class="section-title text-xl font-semibold mb-2">Pro Section (EN)</h2>
          <p class="mb-4">You can download Could Seed's EPK (Electronic Press Kit) and technical rider using the links below:</p>
          <ul class="list-disc list-inside mb-2">
            <li><a href="#" class="text-green-700 underline hover:text-green-900">Download EPK</a></li>
            <li><a href="COULD_SEED_TECHNICAL_RIDER_ENG.pdf" download class="text-green-700 underline hover:text-green-900">Download rider</a></li>
          </ul>
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
export class ProPageComponent {}
