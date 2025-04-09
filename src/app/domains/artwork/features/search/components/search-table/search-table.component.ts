import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common';
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
