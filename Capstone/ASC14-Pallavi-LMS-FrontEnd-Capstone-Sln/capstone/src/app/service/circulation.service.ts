import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Circulation } from '../model/circulation.model';

@Injectable({
  providedIn: 'root',
})
export class CirculationService {
  private baseUrl = 'http://localhost:8080/circulations';

  constructor(private http: HttpClient) {}

  getCirculations(): Observable<Circulation[]> {
    return this.http.get<Circulation[]>(`${this.baseUrl}`).pipe(
      catchError(error => {
        console.error('Error fetching circulations:', error);
        return throwError(() => new Error('Failed to fetch circulations.'));
      })
    );
  }

  addCirculation(circulation: Circulation): Observable<Circulation> {
    return this.http.post<Circulation>(`${this.baseUrl}`, circulation).pipe(
      catchError(error => {
        console.error('Error adding circulation:', error);
        return throwError(() => new Error('Failed to add circulation.'));
      })
    );
  }

  updateCirculation(id: string, circulation: Circulation): Observable<Circulation> {
    return this.http.put<Circulation>(`${this.baseUrl}/${id}`, circulation).pipe(
      catchError(error => {
        console.error('Error updating circulation:', error);
        return throwError(() => new Error('Failed to update circulation.'));
      })
    );
  }

  deleteCirculation(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
      catchError(error => {
        console.error('Error deleting circulation:', error);
        return throwError(() => new Error('Failed to delete circulation.'));
      })
    );
  }
}





