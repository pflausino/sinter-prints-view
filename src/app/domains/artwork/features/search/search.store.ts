import { Injectable } from '@angular/core';
import { Artwork } from '../../data/artwork';
@Injectable({providedIn:'root'})

export class SearchStore {
  ELEMENT_DATA: Array<Artwork> = [
    { id: '1', fileName: 'Hydrogen', createdDate: 'H' },
    { id: '2', fileName: 'Helium', createdDate: 'He' },
    { id: '3', fileName: 'Lithium', createdDate: 'Li' },
    { id: '4', fileName: 'Beryllium', createdDate: 'Be' },
    { id: '5', fileName: 'Boron', createdDate: 'B' },
    { id: '6', fileName: 'Carbon', createdDate: 'C' },
    { id: '7', fileName: 'Nitrogen', createdDate: 'N' },
    { id: '8', fileName: 'Oxygen', createdDate: 'O' },
    { id: '9', fileName: 'Fluorine', createdDate: 'F' },
    { id: '10', fileName: 'Neon', createdDate: 'Ne' },
  ];
}
