import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard) },
  { path: 'track', loadComponent: () => import('./pages/sleep-tracker/sleep-tracker').then(m => m.SleepTracker) },
  { path: 'analysis', loadComponent: () => import('./pages/sleep-analysis/sleep-analysis').then(m => m.SleepAnalysis) },
  { path: 'dreams', loadComponent: () => import('./pages/dream-journal/dream-journal').then(m => m.DreamJournal) },
  { path: '**', redirectTo: '' },
];
