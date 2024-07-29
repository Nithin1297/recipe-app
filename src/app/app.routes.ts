import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


  export const routes: Routes = [
    {
        path: '',
        component : LandingPageComponent,
    },
    {
        path : 'recipes',
        component: DashboardComponent,
    },
    {
        path : 'search',
        component: SearchComponent,
    },
    {
        path : '**',
        component: PageNotFoundComponent,
    },
];
