import { Routes } from '@angular/router';
import { FestivalHomeComponent } from './pages/festival-home-component/festival-home-component';
import { ExposantListComponent } from './pages/exposant-list-component/exposant-list-component';
import { FestivalsListPageComponent } from './pages/festivals-list-page-component/festivals-list-page-component';
import { ExposantDetailComponent } from './exposant-detail-component/exposant-detail-component';
import { AdminComponent } from './admin-component/admin-component';
import { ExposantsManager } from './exposants-manager/exposants-manager';
import { FestivalsManager } from './festivals-manager/festivals-manager';
import { AuthGuard } from './auth-guard';

export const routes: Routes = [
    { path: '', component: FestivalHomeComponent },
    { path: 'exposants', component: ExposantListComponent, title: 'exposants' },
    { path: 'festivals-list', component: FestivalsListPageComponent, title: 'festivals' },
    { path: 'exposants/:id', component: ExposantDetailComponent, title: 'exposant detail' },
    { path: '', redirectTo: 'exposants', pathMatch: 'full' },
    { path: 'admin',component: AdminComponent, canActivateChild: [AuthGuard], children: [
        { path: 'exposants-manager', component: ExposantsManager },
        { path: 'festivals-manager', component: FestivalsManager }
    ]}
];
