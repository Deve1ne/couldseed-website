import { Component, OnInit, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';

interface TourDate {
  date: string;
  city: string;
  venue: string;
}

interface YearGroup {
  year: number;
  dates: TourDate[];
}

@Component({
  selector: 'app-tour-dates',
  standalone: true,
  imports: [CommonModule, DatePipe],
  template: `
    <section id="tour" class="w-full bg-white text-gray-800 px-4 py-6 md:py-10 flex flex-col items-center transition-all">
      <div class="w-full max-w-2xl">
        <h2 class="section-title text-2xl md:text-3xl font-bold mb-4 text-center" style="font-family: 'Poppins', 'Inter', sans-serif;">Dates de tournée</h2>
        <ul class="flex flex-col gap-3" *ngIf="upcomingDates().length > 0; else noDates">
          <li *ngFor="let tour of upcomingDates()" class="flex flex-col md:flex-row md:justify-between md:items-center bg-gray-50 rounded-xl px-6 py-4 shadow animate-fade-in">
            <span class="font-semibold text-lg text-gray-700">{{ tour.date | date: 'longDate' }}</span>
            <span class="text-gray-500">{{ tour.city }} – {{ tour.venue }}</span>
          </li>
        </ul>
        <ng-template #noDates>
          <div class="text-center text-gray-500 text-lg py-8">Dates annoncées prochainement.</div>
        </ng-template>

        <details *ngIf="pastDatesByYear().length > 0" class="w-full mt-6">
          <summary class="cursor-pointer text-gray-500 hover:text-green-700 transition-colors select-none text-center">
            Voir les dates passées
          </summary>
          <div class="mt-4 flex flex-col gap-6">
            <div *ngFor="let group of pastDatesByYear()">
              <h3 class="text-lg font-semibold text-gray-700 mb-2">{{ group.year }}</h3>
              <ul class="flex flex-col gap-2">
                <li *ngFor="let tour of group.dates" class="flex flex-col md:flex-row md:justify-between md:items-center bg-gray-50 rounded-xl px-6 py-3 shadow-sm opacity-80">
                  <span class="font-medium text-gray-600">{{ tour.date | date: 'longDate' }}</span>
                  <span class="text-gray-500">{{ tour.city }} – {{ tour.venue }}</span>
                </li>
              </ul>
            </div>
          </div>
        </details>
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
  private allDates = signal<TourDate[]>([]);

  private todayMidnight = computed(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate());
  });

  upcomingDates = computed(() =>
    this.allDates().filter(tour => new Date(tour.date) >= this.todayMidnight())
  );

  pastDatesByYear = computed<YearGroup[]>(() => {
    const past = this.allDates().filter(tour => new Date(tour.date) < this.todayMidnight());
    const byYear = new Map<number, TourDate[]>();
    for (const tour of past) {
      const year = new Date(tour.date).getFullYear();
      if (!byYear.has(year)) byYear.set(year, []);
      byYear.get(year)!.push(tour);
    }
    return Array.from(byYear.entries())
      .sort(([yearA], [yearB]) => yearB - yearA)
      .map(([year, dates]) => ({
        year,
        dates: dates.sort((a, b) => b.date.localeCompare(a.date))
      }));
  });

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<TourDate[]>('tour-dates.json').subscribe({
      next: data => this.allDates.set(data),
      error: err => console.error('Impossible de charger tour-dates.json', err)
    });
  }
}
