import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact" class="w-full bg-white text-gray-800 px-4 py-6 md:py-10 flex flex-col items-center transition-all">
      <div class="w-full max-w-xl flex flex-col items-center">
        <h2 class="section-title text-2xl md:text-3xl font-bold mb-4 text-center" style="font-family: 'Poppins', 'Inter', sans-serif;">Contact</h2>
        <a href="mailto:couldseed@mailo.com" class="text-green-700 text-lg md:text-xl font-semibold underline hover:text-green-900 transition-colors">couldseed@mailo.com</a>
      </div>
    </section>
  `,
  styles: [`
    .section-title {
      color: #067469;
    }
  `]
})
export class ContactComponent {}
