import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { SearchStore } from '../../search.store';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-search-table',
  imports: [MatTableModule, CommonModule, AsyncPipe],
  providers: [SearchStore],
  templateUrl: './search-table.component.html',
  styleUrl: './search-table.component.scss'
})
export class SearchTableComponent {

  store = inject(SearchStore)
  displayedColumns: string[] = ['id', 'fileName', 'createdDate', 'fileType'];

  ngOnInit() {
    this.store.loadArtworks();
  }


}
