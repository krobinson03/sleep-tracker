import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SleepService } from '../../services/sleep.service';
import type { SleepStageBreakdown, SleepStageId } from '../../models/sleep-entry.model';

/** Full definitions of each sleep stage */
const SLEEP_STAGE_DEFINITIONS: { id: SleepStageId; name: string; definition: string }[] = [
  {
    id: 'n1',
    name: 'Stage 1 (N1)',
    definition:
      'The lightest stage of sleep and occurs as a person first falls asleep. You can be woken easily during this stage.',
  },
  {
    id: 'n2',
    name: 'Stage 2 (N2)',
    definition:
      'Where the body starts to relax more deeply. Body temperature drops, muscles relax, and heart and breathing rate slow.',
  },
  {
    id: 'n3',
    name: 'Stage 3 (N3 / Deep sleep)',
    definition:
      'The deepest and most restorative sleep, allowing the body to recover and grow. Waking is difficult during this stage.',
  },
  {
    id: 'rem',
    name: 'REM Sleep',
    definition:
      'Where most dreaming occurs, brain activity increases, and the body becomes temporarily paralyzed. Essential for memory and mood.',
  },
];

@Component({
  selector: 'app-sleep-analysis',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sleep-analysis.html',
  styleUrl: './sleep-analysis.scss',
})
export class SleepAnalysis {
  protected readonly stageDefinitions = SLEEP_STAGE_DEFINITIONS;

  constructor(protected sleep: SleepService) {}

  /** Sorted by date descending */
  protected entriesWithAnalysis = computed(() => {
    const list = [...this.sleep.entries()].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    return list.map((entry) => this.sleep.analyze(entry));
  });

  protected formatDuration(minutes: number): string {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m > 0 ? `${h}h ${m}m` : `${h}h`;
  }

  protected formatPercent(n: number): string {
    return `${Math.round(n)}%`;
  }

  /** Build pie chart from stage percentages */
  protected pieChartGradient(stages: SleepStageBreakdown[]): string {
    let cum = 0;
    const parts = stages.map((s) => {
      const start = cum;
      cum += s.percentage;
      return `var(--stage-${s.id}) ${start}% ${cum}%`;
    });
    return `conic-gradient(${parts.join(', ')})`;
  }

  protected pieChartAriaLabel(stages: SleepStageBreakdown[]): string {
    return stages.map((s) => `${s.name} ${this.formatPercent(s.percentage)}`).join(', ');
  }

  protected deleteEntry(id: string): void {
    if (confirm('Delete this sleep entry?')) this.sleep.deleteEntry(id);
  }
}
