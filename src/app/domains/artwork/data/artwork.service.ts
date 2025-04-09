import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Artwork } from "./artwork";

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {
  private http = inject(HttpClient)
  private readonly apiUrl = 'http://localhost:2222/artworks'

  getAllArtworks(): Observable<Artwork[]> {
    return this.http.get<Artwork[]>(this.apiUrl)
  }
}
