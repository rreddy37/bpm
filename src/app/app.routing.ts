import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BatchjobsComponent } from './batchjobs/batchjobs.component';
import { LoginComponent } from './login/login.component';

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
    path: 'login',
    component: LoginComponent
},
  {
    path: 'batchjobs',
    component: BatchjobsComponent
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '/home' }
];

export const routing = RouterModule.forRoot(appRoutes); // for hash routes use RouterModule.forRoot(appRoutes, { useHash: true });
