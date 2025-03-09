import { Component } from '@angular/core';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { SearchTableComponent } from "./components/search-table/search-table.component";

@Component({
  selector: 'app-search',
  imports: [SearchBarComponent, SearchTableComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

}
