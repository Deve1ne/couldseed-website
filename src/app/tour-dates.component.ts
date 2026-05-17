import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';

interface TourDate {
  date: string;
  city: string;
  venue: string;
}

@Component({
  selector: 'app-tour-dates',
  standalone: true,
  imports: [CommonModule, DatePipe],
  template: `
    <section id="tour" class="w-full bg-white text-gray-800 px-4 py-6 md:py-10 flex flex-col items-center transition-all">
      <div class="w-full max-w-2xl">
        <h2 class="section-title text-2xl md:text-3xl font-bold mb-4 text-center" style="font-family: 'Poppins', 'Inter', sans-serif;">Dates de tournée</h2>
        <ul class="flex flex-col gap-3" *ngIf="upcomingDates.length > 0; else noDates">
          <li *ngFor="let tour of upcomingDates" class="flex flex-col md:flex-row md:justify-between md:items-center bg-gray-50 rounded-xl px-6 py-4 shadow animate-fade-in">
            <span class="font-semibold text-lg text-gray-700">{{ tour.date | date: 'longDate' }}</span>
            <span class="text-gray-500">{{ tour.city }} – {{ tour.venue }}</span>
          </li>
        </ul>
        <ng-template #noDates>
          <div class="text-center text-gray-500 text-lg py-8">Dates annoncées prochainement.</div>
        </ng-template>
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
export class TourDatesComponent implements OnInit {
  tourDates: TourDate[] = [];
  upcomingDates: TourDate[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<TourDate[]>('tour-dates.json').subscribe(data => {
      this.tourDates = data;
      const today = new Date();
      this.upcomingDates = this.tourDates.filter(tour => {
        const date = new Date(tour.date);
        // Garde les dates aujourd'hui ou dans le futur
        return date >= new Date(today.getFullYear(), today.getMonth(), today.getDate());
      });
    });
  }
}
