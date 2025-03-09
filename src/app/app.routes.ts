import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo:'artwork/search', pathMatch:'full' },
  { path: 'artwork', loadChildren:() => import('./domains/artwork/artwork.routes').then(r => r.artworkRoutes) }, //subrota para Artwork.routes
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo:'not-found', pathMatch:'full'},
];
