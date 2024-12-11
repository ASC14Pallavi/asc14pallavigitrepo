import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catalogue } from '../model/catalogue.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  private apiUrl = 'http://localhost:8080/catalogues';  // Backend URL for catalogues

  constructor(private http: HttpClient) { }

  // Fetch all catalogues
  getCatalogues(): Observable<Catalogue[]> {
    return this.http.get<Catalogue[]>(this.apiUrl);
  }

  // Add a new catalogue
  addCatalogue(catalogue: Catalogue): Observable<Catalogue> {
    return this.http.post<Catalogue>(`${this.apiUrl}/create`, catalogue);
  }

  // Delete a catalogue by ID
  deleteCatalogue(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Update an existing catalogue
  updateCatalogue(id: string, catalogue: Catalogue): Observable<Catalogue> {
    return this.http.put<Catalogue>(`${this.apiUrl}/${id}`, catalogue);
  }
}





