/** Single night's sleep record */
export interface SleepEntry {
  id: string;
  /** ISO date string (night you went to bed) */
  date: string;
  /** Bedtime as ISO string or HH:mm */
  bedTime: string;
  /** Wake time as ISO string or HH:mm */
  wakeTime: string;
  /** Total sleep duration in minutes */
  durationMinutes: number;
  /** Optional notes */
  notes?: string;
}

/** Sleep stage identifiers */
export type SleepStageId = 'n1' | 'n2' | 'n3' | 'rem';

/** Per-stage breakdown (estimated from duration) */
export interface SleepStageBreakdown {
  id: SleepStageId;
  name: string;
  description: string;
  /** Duration in minutes */
  durationMinutes: number;
  /** Percentage of total sleep */
  percentage: number;
}

/** Full analysis for one sleep entry */
export interface SleepAnalysis {
  entry: SleepEntry;
  /** Number of ~90-minute cycles */
  cycleCount: number;
  stages: SleepStageBreakdown[];
}
