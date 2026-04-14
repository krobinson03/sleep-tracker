import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SleepService } from '../../services/sleep.service';

@Component({
  selector: 'app-sleep-tracker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sleep-tracker.html',
  styleUrl: './sleep-tracker.scss',
})
export class SleepTracker {
  protected bedDate = signal('');
  protected bedTime = signal('22:00');
  protected wakeDate = signal('');
  protected wakeTime = signal('06:00');
  protected notes = signal('');
  protected error = signal<string | null>(null);

  constructor(
    private sleep: SleepService,
    private router: Router
  ) {
    const today = new Date();
    const todayStr = today.toISOString().slice(0, 10);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().slice(0, 10);
    this.bedDate.set(todayStr);
    this.wakeDate.set(tomorrowStr);
  }

  protected onSubmit(): void {
    this.error.set(null);
    const bedD = this.bedDate();
    const bedT = this.bedTime();
    const wakeD = this.wakeDate();
    const wakeT = this.wakeTime();
    if (!bedD || !wakeD) {
      this.error.set('Please set bed and wake dates.');
      return;
    }
    const bedMs = new Date(`${bedD}T${bedT}`).getTime();
    let wakeMs = new Date(`${wakeD}T${wakeT}`).getTime();
    if (wakeMs <= bedMs) wakeMs += 24 * 60 * 60 * 1000;
    const durationMinutes = Math.round((wakeMs - bedMs) / (60 * 1000));
    if (durationMinutes <= 0 || durationMinutes > 24 * 60) {
      this.error.set('Invalid times. Wake time should be after bed time.');
      return;
    }
    this.sleep.addEntry({
      date: bedD,
      bedTime: `${bedD}T${bedT}`,
      wakeTime: `${wakeD}T${wakeT}`,
      durationMinutes,
      notes: this.notes() || undefined,
    });
    this.router.navigate(['/']);
  }
}
