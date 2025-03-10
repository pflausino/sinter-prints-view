import { Routes } from '@angular/router';
import { SearchComponent } from './features/search/search.component';
import { CreateComponent } from './features/create/create.component';

export const artworkRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'create', component: CreateComponent },
];
