import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Bio {
  title: string;
  content: string;
}

interface BioData {
  fr: Bio;
  en: Bio;
}

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="bio" class="w-full bg-white text-gray-800 px-4 py-6 md:py-10 flex flex-col items-center transition-all">
      <div class="w-full max-w-3xl flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <div class="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
          <ng-container *ngIf="bioData">
            <h2 class="section-title text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2" style="font-family: 'Poppins', 'Inter', sans-serif;">
              <img src="fr.webp" alt="FR" class="w-6 h-6 inline-block align-middle" />
             
            </h2>
            <p class="text-gray-600 text-base md:text-lg leading-relaxed mb-4 flex items-center gap-2">
              {{ bioData?.fr?.content }}
            </p>
            <h2 class="section-title text-2xl md:text-3xl font-bold mb-4 mt-6 flex items-center gap-2" style="font-family: 'Poppins', 'Inter', sans-serif;">
              <img src="eng.png" alt="EN" class="w-6 h-6 inline-block align-middle" />
            </h2>
            <p class="text-gray-600 text-base md:text-lg leading-relaxed mb-4 flex items-center gap-2">
            {{ bioData?.en?.content }}
            </p>
          </ng-container>
        </div>
        <div class="w-full md:w-1/3 flex justify-center">
          <div class="h-auto md:h-[340px] flex items-center justify-center shadow animate-fade-in overflow-hidden">
            <img src="bandphoto.webp" alt="Could Seed" class="object-contain w-full h-full max-h-[340px]" />
          </div>
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
export class BioComponent implements OnInit {
  bioData?: BioData;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<BioData>('bio.json').subscribe(data => {
      console.log('Bio data loaded:', data);
      this.bioData = data;
    });
  }
}
