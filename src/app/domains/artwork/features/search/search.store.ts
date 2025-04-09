import { inject, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { switchMap, tap } from 'rxjs';
import { Artwork } from '../../data/artwork';
import { ArtworkService } from '../../data/artwork.service';

interface ArtworkState {
  artworks: Artwork[];
  loading: boolean;
}

@Injectable({ providedIn: 'root' })
export class SearchStore extends ComponentStore<ArtworkState> {
  private artworkService = inject(ArtworkService);

  constructor() {
    super({ artworks: [], loading: false })
  }

  readonly artworks$ = this.select((state) => state.artworks)
  readonly loading$ = this.select((state) => state.loading)

  readonly loadArtworks = this.effect((trigger$) =>
    trigger$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(() =>
        this.artworkService.getAllArtworks().pipe(
          tap({
            next: (artworks) => this.patchState({ artworks, loading: false }),
            error: () => this.patchState(({ loading: false }))
          })
        )
      )
    )

  )

}
