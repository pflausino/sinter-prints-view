import { Component } from '@angular/core';
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
  imports: [MatTableModule],
  templateUrl: './search-table.component.html',
  styleUrl: './search-table.component.scss'
})
export class SearchTableComponent {


  displayedColumns: string[] = ['id', 'fileName', 'createdDate'];

  constructor(public store: SearchStore) {

  }

}
