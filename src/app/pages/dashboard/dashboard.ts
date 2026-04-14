import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SleepService } from '../../services/sleep.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  constructor(protected sleep: SleepService) {}

  protected latest = computed(() => this.sleep.getLatestAnalysis());
  protected recommendation = computed(() => this.sleep.recommendation());
  protected recentAverageMinutes = computed(() => this.sleep.recentAverageMinutes());

  protected formatDuration(minutes: number): string {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m > 0 ? `${h}h ${m}m` : `${h}h`;
  }

  protected timeOfDay(): string {
    const h = new Date().getHours();
    if (h < 12) return 'morning';
    if (h < 17) return 'afternoon';
    return 'evening';
  }

  protected recMessage(): string | null {
    const r = this.recommendation();
    if (!r) return null;
    if (r === 'more') return 'Try to get a bit more sleep (7–9 hours is ideal).';
    if (r === 'less') return 'You\'re averaging above 9 hours; consider slightly less if you feel groggy.';
    return 'Your recent sleep duration looks good.';
  }
}
