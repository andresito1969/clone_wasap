import { Routes } from '@angular/router';
import { ProfileComponent } from './Domains/profile/profile.component';
import { UserSettingsComponent } from './Domains';

export const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'ProfileEdit',
  },
  {
    path: 'user-settings',
    component: UserSettingsComponent,
    title: 'UserSettings',
  },
  {
    path: '**',
    component: ProfileComponent,
    title: 'DefaultRouteWhenOpeningPage',
  },
];
