import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BatchjobsComponent } from './batchjobs/batchjobs.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
 },
  {
      path: 'home',
      component: HomeComponent
  },
  {
    path: 'batchjobs',
    component: BatchjobsComponent
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '/home' }
];

export const routing = RouterModule.forRoot(appRoutes);
