import { Injectable, signal, computed } from '@angular/core';
import type { SleepEntry, SleepAnalysis, SleepStageBreakdown, SleepStageId } from '../models/sleep-entry.model';

const STORAGE_KEY = 'sleep-tracker-entries';
const CYCLE_MINUTES = 90;
/** Per-cycle stage distribution (percent): N1, N2, N3, REM */
const STAGE_DISTRIBUTION: { id: SleepStageId; name: string; description: string; pct: number }[] = [
  { id: 'n1', name: 'Stage 1 (N1)', description: 'Lightest stage, first falling asleep.', pct: 5 },
  { id: 'n2', name: 'Stage 2 (N2)', description: 'Body relaxes, temperature drops, heart and breathing slow.', pct: 45 },
  { id: 'n3', name: 'Stage 3 (N3 / Deep)', description: 'Deepest, restorative sleep; recovery and growth.', pct: 25 },
  { id: 'rem', name: 'REM Sleep', description: 'Dreaming, high brain activity, temporary muscle paralysis.', pct: 25 },
];

@Injectable({ providedIn: 'root' })
export class SleepService {
  private entriesSignal = signal<SleepEntry[]>(this.loadFromStorage());

  entries = this.entriesSignal.asReadonly();

  /** Last 7 days of sleep for recommendations */
  recentSleep = computed(() => {
    const list = [...this.entriesSignal()].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    return list.slice(0, 7);
  });

  /** Average duration over recent nights (minutes) */
  recentAverageMinutes = computed(() => {
    const recent = this.recentSleep();
    if (recent.length === 0) return null;
    const sum = recent.reduce((s, e) => s + e.durationMinutes, 0);
    return Math.round(sum / recent.length);
  });

  /** Recommendation: 'more' | 'less' | 'good' | null if not enough data */
  recommendation = computed(() => {
    const avg = this.recentAverageMinutes();
    if (avg === null) return null;
    const targetMin = 7 * 60;
    const targetMax = 9 * 60;
    if (avg < targetMin) return 'more';
    if (avg > targetMax) return 'less';
    return 'good';
  });

  private loadFromStorage(): SleepEntry[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  private saveToStorage(entries: SleepEntry[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }

  addEntry(entry: Omit<SleepEntry, 'id'>): SleepEntry {
    const withId: SleepEntry = {
      ...entry,
      id: crypto.randomUUID(),
    };
    this.entriesSignal.update((list) => {
      const next = [...list, withId];
      this.saveToStorage(next);
      return next;
    });
    return withId;
  }

  updateEntry(id: string, patch: Partial<SleepEntry>): void {
    this.entriesSignal.update((list) => {
      const next = list.map((e) => (e.id === id ? { ...e, ...patch } : e));
      this.saveToStorage(next);
      return next;
    });
  }

  deleteEntry(id: string): void {
    this.entriesSignal.update((list) => {
      const next = list.filter((e) => e.id !== id);
      this.saveToStorage(next);
      return next;
    });
  }

  getEntry(id: string): SleepEntry | undefined {
    return this.entriesSignal().find((e) => e.id === id);
  }

  /** Estimate cycle count (90 min per cycle) and stage breakdown */
  analyze(entry: SleepEntry): SleepAnalysis {
    const totalMin = entry.durationMinutes;
    const cycleCount = Math.round(totalMin / CYCLE_MINUTES) || 1;
    const stages: SleepStageBreakdown[] = STAGE_DISTRIBUTION.map((s) => {
      const durationMinutes = Math.round((s.pct / 100) * totalMin);
      const percentage = totalMin > 0 ? (durationMinutes / totalMin) * 100 : 0;
      return {
        id: s.id,
        name: s.name,
        description: s.description,
        durationMinutes,
        percentage,
      };
    });
    return { entry, cycleCount, stages };
  }

  /** Get analysis for the most recent entry (for dashboard) */
  getLatestAnalysis(): SleepAnalysis | null {
    const list = [...this.entriesSignal()].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    const latest = list[0];
    return latest ? this.analyze(latest) : null;
  }
}
