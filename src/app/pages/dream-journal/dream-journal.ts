import { Component, signal, computed, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DreamJournalService } from '../../services/dream-journal.service';

@Component({
  selector: 'app-dream-journal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dream-journal.html',
  styleUrl: './dream-journal.scss',
})
export class DreamJournal implements OnInit {
  protected todayContent = signal('');
  protected expandedId = signal<string | null>(null);

  constructor(protected dreams: DreamJournalService) {}

  ngOnInit(): void {
    const existing = this.dreams.getEntryForDate(this.dreams.todayDateString());
    if (existing) this.todayContent.set(existing.content);
  }

  protected today = computed(() => this.dreams.todayDateString());
  protected todayEntry = computed(() => this.dreams.getEntryForDate(this.today()));
  protected history = computed(() => this.dreams.entriesByDate());

  protected formatDate(dateStr: string): string {
    const d = new Date(dateStr + 'T12:00:00');
    return d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
  }

  protected loadToday(): void {
    const e = this.todayEntry();
    this.todayContent.set(e?.content ?? '');
  }

  protected saveToday(): void {
    const content = this.todayContent().trim();
    const saved = this.dreams.saveEntry(this.today(), content || '(No dream remembered)');
    this.todayContent.set(saved.content);
  }

  protected toggleExpand(id: string): void {
    this.expandedId.update((current) => (current === id ? null : id));
  }

  protected isExpanded(id: string): boolean {
    return this.expandedId() === id;
  }

  protected deleteDream(id: string): void {
    if (confirm('Delete this dream entry?')) this.dreams.deleteEntry(id);
  }
}
