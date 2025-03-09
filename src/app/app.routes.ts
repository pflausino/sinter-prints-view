import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './domains/artwork/features/search/search.component';

export const routes: Routes = [
  { path: '', redirectTo:'search', pathMatch:'full' },
  { path: 'search', component: SearchComponent },
  { path: 'create', component: AppComponent },
  { path: 'not-found', component: AppComponent },
  { path: '**', redirectTo:'not-found', pathMatch:'full'},
];
