import { Injectable, signal, computed } from '@angular/core';
import type { DreamEntry } from '../models/dream-entry.model';

const STORAGE_KEY = 'sleep-tracker-dreams';

@Injectable({ providedIn: 'root' })
export class DreamJournalService {
  private entriesSignal = signal<DreamEntry[]>(this.loadFromStorage());

  entries = this.entriesSignal.asReadonly();

  /** Sorted by date descending */
  entriesByDate = computed(() => {
    return [...this.entriesSignal()].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  });

  private loadFromStorage(): DreamEntry[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  private saveToStorage(entries: DreamEntry[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }

  getEntryForDate(date: string): DreamEntry | undefined {
    return this.entriesSignal().find((e) => e.date === date);
  }

  /** Today's date as YYYY-MM-DD */
  todayDateString(): string {
    return new Date().toISOString().slice(0, 10);
  }

  hasEntryForToday(): boolean {
    return this.getEntryForDate(this.todayDateString()) !== undefined;
  }

  saveEntry(date: string, content: string): DreamEntry {
    const now = new Date().toISOString();
    const existing = this.getEntryForDate(date);
    let entry: DreamEntry;
    if (existing) {
      entry = { ...existing, content, updatedAt: now };
      this.entriesSignal.update((list) => {
        const next = list.map((e) => (e.id === existing.id ? entry : e));
        this.saveToStorage(next);
        return next;
      });
    } else {
      entry = { id: crypto.randomUUID(), date, content, updatedAt: now };
      this.entriesSignal.update((list) => {
        const next = [...list, entry];
        this.saveToStorage(next);
        return next;
      });
    }
    return entry;
  }

  deleteEntry(id: string): void {
    this.entriesSignal.update((list) => {
      const next = list.filter((e) => e.id !== id);
      this.saveToStorage(next);
      return next;
    });
  }
}
