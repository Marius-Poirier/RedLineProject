import { Routes } from '@angular/router';
import { FestivalHomeComponent } from './pages/festival-home-component/festival-home-component';
import { ExposantListComponent } from './pages/exposant-list-component/exposant-list-component';
import { FestivalsListPageComponent } from './pages/festivals-list-page-component/festivals-list-page-component';
import { ExposantDetailComponent } from './exposant-detail-component/exposant-detail-component';

export const routes: Routes = [
    { path: '', component: FestivalHomeComponent }, // route par défaut
    { path: 'exposants', component: ExposantListComponent },
    { path: 'festivals-list', component: FestivalsListPageComponent },
    { path: 'exposants/:id', component: ExposantDetailComponent }
];
