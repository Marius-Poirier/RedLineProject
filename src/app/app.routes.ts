import { Routes } from '@angular/router';
import { FestivalHomeComponent } from './pages/festival-home-component/festival-home-component';
import { ExposantListComponent } from './pages/exposant-list-component/exposant-list-component';
import { FestivalsListPageComponent } from './pages/festivals-list-page-component/festivals-list-page-component';
import { ExposantDetailComponent } from './exposant-detail-component/exposant-detail-component';

export const routes: Routes = [
    { path: '', component: FestivalHomeComponent },
    { path: 'exposants', component: ExposantListComponent, title: 'exposants' },
    { path: 'festivals-list', component: FestivalsListPageComponent, title: 'festivals' },
    { path: 'exposants/:id', component: ExposantDetailComponent, title: 'exposant detail' },
    { path: '', redirectTo: 'exposants', pathMatch: 'full' }
];
